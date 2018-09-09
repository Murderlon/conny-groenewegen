import React, { Fragment } from 'react'
import styled from 'styled-components'
import delve from 'dlv'

import ProjectCard from '../components/ProjectCard'
import CategoryHeader from '../components/CategoryHeader'

const Section = styled.section`
  margin: ${({ theme }) => theme.spacing.xlarge} 0;
`

const Heading = styled.h2`
  text-transform: capitalize;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const ReSpace = ({ data }) => {
  const subCategories = {
    collections: delve(data.collections, 'edges'),
    collaborations: delve(data.collaborations, 'edges'),
    exhibitions: delve(data.exhibitions, 'edges')
  }

  return (
    <Fragment>
      <CategoryHeader title="Couture" color="green">
        <p>
          The fibers and threads I use reassemble the narrative to reach a point
          where the material starts to create a path that follows its own rules.
          A path travelling beyond guidance, storytelling and the cliché,
          supported by the chant of the digital knitting machine and the
          repetitive rhythm of classic hand sewing.
        </p>
      </CategoryHeader>
      {Object.keys(subCategories).map(cat => {
        {
          return (
            subCategories[cat] && (
              <Section key={cat}>
                <Heading>{cat}</Heading>
                <Wrapper>
                  {subCategories[cat].map(({ node }) => {
                    return (
                      <ProjectCard node={node} key={node.frontmatter.title} />
                    )
                  })}
                </Wrapper>
              </Section>
            )
          )
        }
      })}
    </Fragment>
  )
}

export default ReSpace

export const ProjectFragment = graphql`
  fragment ProjectFragment on MarkdownRemarkEdge {
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
        category
        title
        headerImage {
          alt
          image
        }
      }
    }
  }
`

export const pageQuery = graphql`
  query ReCoutureProjects {
    collections: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "collections" } } }
    ) {
      edges {
        ...ProjectFragment
      }
    }
    collaborations: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "collaborations" } } }
    ) {
      edges {
        ...ProjectFragment
      }
    }
    exhibitions: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "exhibitions" } } }
    ) {
      edges {
        ...ProjectFragment
      }
    }
  }
`
