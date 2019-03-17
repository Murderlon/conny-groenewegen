import React, { Fragment } from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import ReactVimeoOembed from 'react-vimeo-oembed'
import delve from 'dlv'

import ReturnLink from '../components/ReturnLink'

const ImageGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.spacing.small};
`

const Img = styled(Image)`
  align-self: center;
  justify-self: center;
`

export default function Template({ data }) {
  const {
    title,
    headerImage,
    vimeoID,
    images,
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

      <Image
        sizes={headerImage.src.childImageSharp.sizes}
        alt={headerImage.alt}
      />

      {data.markdownRemark.html && (
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      )}

      {vimeoID && (
        <ReactVimeoOembed
          videoId={vimeoID}
          style={{ width: '100%' }}
          options={{
            'max-width': 1000,
            'max-height': 300,
            title: false,
            portrait: false,
            byline: false,
          }}
        />
      )}

      {images && images.length > 0 && (
        <ImageGrid>
          {images.map(
            ({ src, alt }, i) =>
              delve(src, 'childImageSharp.sizes') && (
                <Img key={i} sizes={src.childImageSharp.sizes} alt={alt} />
              ),
          )}
        </ImageGrid>
      )}

      <p>
        <ReturnLink to={parent(data.markdownRemark.id).link}>
          {parent(data.markdownRemark.id).label}
        </ReturnLink>
      </p>
    </Fragment>
  )
}

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
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
        vimeoID
        images {
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
`
