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
      <CategoryHeader title="Space" color="blue">
        <p>
          My spatial machines, derived from the age-old artisanal practices of
          knitting and knotting reload public spaces with purpose and meaning.
          When put to work, these structures create relationships with the
          spaces they are placed in and stimulate our creative potential,
          enabling us to actively reconnect with the new conditions for this
          environment.
        </p>
      </CategoryHeader>
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
            sizes(maxWidth: 1000) {
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
