import React, { Fragment } from 'react'
import styled from 'styled-components'

import ProjectCard from '../components/ProjectCard'
import CategoryHeader from '../components/CategoryHeader'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const ReSpace = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Fragment>
      <CategoryHeader title="Space" color="blue" />
      <Wrapper>
        {projects.map(({ node }) => (
          <ProjectCard node={node} key={node.frontmatter.title} />
        ))}
      </Wrapper>
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
          childrenImageSharp {
            sizes(maxWidth: 500) {
              originalName
              ...GatsbyImageSharpSizes
            }
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
