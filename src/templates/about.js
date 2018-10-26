import React, { Fragment } from 'react'
import styled, { withTheme } from 'styled-components'
import { Helmet } from 'react-helmet'
import ReactVimeoOembed from 'react-vimeo-oembed'

import ReturnLink from '../components/ReturnLink'

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
`

const About = ({ data }) => {
  const { html } = data.markdownRemark
  const vimeoID = data.markdownRemark.frontmatter.vimeoID

  return (
    <Fragment>
      <Helmet>
        <title>Conny Groenewegen | About</title>
      </Helmet>
      <ReturnLink to="/">Overview</ReturnLink>
      <Heading>About</Heading>

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

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Fragment>
  )
}

export default withTheme(About)

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        vimeoID
      }
    }
  }
`
