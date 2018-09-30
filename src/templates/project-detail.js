import React, { Fragment } from 'react'
import styled from 'styled-components'

import ReturnLink from '../components/ReturnLink'

const ImageGrid = styled.section`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.large} 0;
`

const Img = styled.img`
  margin: ${({ theme }) => theme.spacing.small} 0;
`

export default function Template({ data }) {
  const {
    title,
    headerImage,
    description,
    images
  } = data.markdownRemark.frontmatter
  const parent = id =>
    id.includes('re-couture')
      ? { link: '/re-couture', label: 'Re-Couture' }
      : { link: '/re-space', label: 'Re-Space' }
  return (
    <Fragment>
      <ReturnLink to={parent(data.markdownRemark.id).link}>
        {parent(data.markdownRemark.id).label}
      </ReturnLink>
      <h1>{title}</h1>

      <img src={headerImage.image} alt={headerImage.alt} />
      {description && <p>{description}</p>}

      <ImageGrid>
        {images.map(({ image, alt }, i) => (
          <Img key={i} src={image} alt={alt} />
        ))}
      </ImageGrid>
    </Fragment>
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
