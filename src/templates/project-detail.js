import React from 'react'
import styled from 'styled-components'

import ReturnLink from '../components/ReturnLink'

const ImageGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme }) => theme.spacing.large} 0;
`

const Img = styled.img`
  flex-basis: 50%;
`

export default function Template({ data }) {
  const {
    title,
    headerImage,
    description,
    images
  } = data.markdownRemark.frontmatter

  return (
    <main>
      <ReturnLink to="/re-couture">Re-Couture</ReturnLink>
      <h1>{title}</h1>

      <img src={headerImage.image} />
      {description && <p>{description}</p>}

      <ImageGrid>
        {images.map(({ image, alt }, i) => (
          <Img src={image} alt={alt} key={i} />
        ))}
      </ImageGrid>
    </main>
  )
}

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        headerImage {
          alt
          image
        }
        description
        images {
          alt
          image
        }
      }
    }
  }
`
