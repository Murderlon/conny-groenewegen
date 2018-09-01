import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import ReturnLink from '../components/ReturnLink'

const ImageGrid = styled.section`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.large} 0;
`

const Img = styled(Image)`
  margin: ${({ theme }) => theme.spacing.small} 0;
`

export default function Template({ data }) {
  const { title, headerImage, description } = data.markdownRemark.frontmatter
  const headerGatsbyImage = data.markdownRemark.childrenImageSharp.find(
    ({ sizes }) => headerImage.image.includes(sizes.originalName)
  )
  return (
    <main>
      <ReturnLink to="/re-couture">Re-Couture</ReturnLink>
      <h1>{title}</h1>

      <Image sizes={headerGatsbyImage.sizes} />
      {description && <p>{description}</p>}

      <ImageGrid>
        {data.markdownRemark.childrenImageSharp.map(
          ({ sizes }) =>
            headerImage.image.includes(sizes.originalName) ? null : (
              <Img sizes={sizes} key={sizes.originalName} />
            )
        )}
      </ImageGrid>
    </main>
  )
}

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        description
        images {
          alt
          image
        }
      }
    }
  }
`
