import React, { Fragment } from 'react'
import styled, { withTheme } from 'styled-components'
import { Helmet } from 'react-helmet'

import ReturnLink from '../components/ReturnLink'
// import MediaButton from '../components/MediaButton'

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
`

// const MediaWrapper = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;

//   a {
//     margin: ${({ theme }) => theme.spacing.medium} 0;
//     margin-right: ${({ theme }) => theme.spacing.medium};
//   }
// `

const About = ({ data }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Conny Groenewegen | About</title>
      </Helmet>
      <ReturnLink to="/">Overview</ReturnLink>
      <Heading>About</Heading>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
