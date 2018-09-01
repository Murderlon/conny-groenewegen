const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      // eslint-disable-next-line no-console
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode, getNodes }) => {
  const { createNodeField, createParentChildLink } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
    // Attach image's ImageSharp node by public path if necessary
    if (node.frontmatter.headerImage.image) {
      createImageNodeFromPath(node.frontmatter.headerImage.image)
    }
    if (node.frontmatter.images.length > 0) {
      node.frontmatter.images.map(({ image }) => createImageNodeFromPath(image))
    }
  }

  function createImageNodeFromPath(relPath) {
    // Find absolute path of linked path
    const pathToFile = path
      .join(__dirname, 'static', relPath)
      .split(path.sep)
      .join('/')

    // Find ID of File node
    const fileImageNode = getNodes().find(n => n.absolutePath === pathToFile)

    if (fileImageNode != null) {
      // Find ImageSharp node corresponding to the File node
      const imageSharpNodeId = fileImageNode.children.find(n =>
        n.endsWith('>> ImageSharp')
      )
      const imageSharpNode = getNodes().find(n => n.id === imageSharpNodeId)

      // Add ImageSharp node as child
      createParentChildLink({
        parent: node,
        child: imageSharpNode
      })
    }
  }
}
