import React, { Fragment } from 'react'
import GatbyLink from 'gatsby-link'
import styled from 'styled-components'

import ArrowIcon from '../icons/arrow.svg'

const Heading = styled.h1`
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.blue};
  }
`

const Link = styled(GatbyLink)`
  font-family: 'IBM Plex Mono', mono;
  font-weight: 400;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.small};

  svg {
    color: ${({ theme }) => theme.white};
    transform: scaleX(-1);
    margin-right: 4px;
  }
`

const Article = styled.article`
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 3px;

  h2 {
    font-family: 'IBM Plex Mono', mono;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: ${({ theme }) => theme.spacing.small};
    margin: 0;
    border-bottom: 2px solid ${({ theme }) => theme.white};
    font-size: 1em;
  }
`

const ReSpace = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Fragment>
      <Link to="/">
        <ArrowIcon /> Overview
      </Link>
      <Heading>
        re-
        <span>space</span>
      </Heading>
      {projects.map(({ node }) => {
        const { title, headerImage } = node.frontmatter
        return (
          <Article key={title}>
            <GatbyLink to={node.fields.slug}>
              <h2>
                {title} <ArrowIcon />
              </h2>
              <img src={headerImage.image} />
            </GatbyLink>
          </Article>
        )
      })}
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
