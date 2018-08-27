import React from 'react'
import GatbyLink from 'gatsby-link'
import styled from 'styled-components'

import ArrowIcon from '../icons/arrow.svg'

const Article = styled.article`
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 3px;
  margin: ${({ theme }) => theme.spacing.medium} 0;

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
  div {
    height: 13em;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const ProjectCard = ({ node }) => {
  const { title, headerImage } = node.frontmatter
  return (
    <Article>
      <GatbyLink to={node.fields.slug}>
        <h2>
          {title} <ArrowIcon />
        </h2>
        <div>
          <img src={headerImage.image} />
        </div>
      </GatbyLink>
    </Article>
  )
}

export default ProjectCard
