import React, { Fragment } from 'react'
import styled from 'styled-components'

import ProjectCard from '../components/ProjectCard'
import CategoryHeader from '../components/CategoryHeader'

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => theme.spacing.huge} 0;

  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
    align-items: end;

    article:last-of-type {
      align-self: start;
    }
  }
`

const ReSpace = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Fragment>
      <CategoryHeader title="Space" color="spaceColor">
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
          frontmatter {
            title
            headerImage {
              alt
              src {
                childImageSharp {
                  sizes(maxWidth: 1000) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
