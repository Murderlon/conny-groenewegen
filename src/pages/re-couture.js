import React, { Fragment } from 'react'
import styled from 'styled-components'
import delve from 'dlv'

import ProjectCard from '../components/ProjectCard'
import CategoryHeader from '../components/CategoryHeader'

const Heading = styled.h2`
  text-transform: capitalize;
`

const ReSpace = ({ data }) => {
  const subCategories = {
    collections: delve(data.collections, 'edges'),
    collaborations: delve(data.collaborations, 'edges'),
    exhibitions: delve(data.exhibitions, 'edges')
  }

  return (
    <Fragment>
      <CategoryHeader title="Couture" color="green" />
      {Object.keys(subCategories).map(cat => {
        {
          return (
            subCategories[cat] && (
              <section key={cat}>
                <Heading>{cat}</Heading>
                {subCategories[cat].map(({ node }) => {
                  return (
                    <ProjectCard node={node} key={node.frontmatter.title} />
                  )
                })}
              </section>
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
