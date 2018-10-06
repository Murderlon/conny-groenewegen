import React from 'react'
import GatbyLink from 'gatsby-link'
import Image from 'gatsby-image'
import styled from 'styled-components'

import ArrowIcon from '../icons/arrow.svg'

const Article = styled.article`
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 3px;
  margin: ${({ theme }) => theme.spacing.medium} 0;
  flex: 1 1 100%;
  align-self: flex-start;

  @media (min-width: 40em) {
    flex: 0 1 47%;
  }

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

const ProjectCard = ({ node }) => {
  const { title, headerImage } = node.frontmatter
  return (
    <Article>
      <GatbyLink to={node.fields.slug}>
        <h2>
          {title} <ArrowIcon />
        </h2>
        <div>
          <Image sizes={headerImage.src.childImageSharp.sizes} />
        </div>
      </GatbyLink>
    </Article>
  )
}

export default ProjectCard
