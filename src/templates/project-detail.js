import React from 'react'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, id } = markdownRemark
  const { title } = frontmatter
  console.log(data)

  // meh
  const parent = id.includes('couture')
    ? 'Couture'
    : id.includes('space')
      ? 'Space'
      : 'Materialize'

  return (
    <main>
      <Link to={`/${parent.toLocaleLowerCase()}`}>Re-{parent}</Link>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  )
}

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
