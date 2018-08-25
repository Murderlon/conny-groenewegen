import React, { Fragment } from 'react'

import ProjectCard from '../components/ProjectCard'
import CategoryHeader from '../components/CategoryHeader'

const ReSpace = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Fragment>
      <CategoryHeader title="Space" color="blue" />
      {projects.map(({ node }) => (
        <ProjectCard node={node} key={node.frontmatter.title} />
      ))}
    </Fragment>
  )
}

export default ReSpace

export const pageQuery = graphql`
  query ReSpaceProjects {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/re-space/" } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            headerImage {
              alt
              image
            }
          }
        }
      }
    }
  }
`
