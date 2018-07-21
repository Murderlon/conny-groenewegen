import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Button from '../components/Button'

const ImageGrid = styled.section`
  display: flex;
  margin: ${({ theme }) => theme.spacing.large} 0;
`

const Img = styled.img`
  flex: 1;
`

export default function Template({ data }) {
  const {
    title,
    headerImage,
    description,
    images
  } = data.markdownRemark.frontmatter
  console.log(images)

  return (
    <main>
      <Link to="/re-couture">Re-Couture</Link>
      <h1>{title}</h1>

      <img src={headerImage.image} />
      {description && <p>{description}</p>}

      <ImageGrid>
        {images.map(({ image, alt }, i) => (
          <Img src={image} alt={alt} key={i} />
        ))}
      </ImageGrid>

      <Button to="" labelText="Previous project">
        Primary Explores
      </Button>
    </main>
  )
}

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
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
