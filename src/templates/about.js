import React, { Fragment } from 'react'
import styled, { withTheme } from 'styled-components'
import { Helmet } from 'react-helmet'

import ReturnLink from '../components/ReturnLink'

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
`

const About = ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <Fragment>
      <Helmet>
        <title>Conny Groenewegen | About</title>
      </Helmet>
      <ReturnLink to="/">Overview</ReturnLink>
      <Heading>About</Heading>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Fragment>
  )
}

export default withTheme(About)

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
