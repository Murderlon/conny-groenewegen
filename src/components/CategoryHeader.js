import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import ReturnLink from '../components/ReturnLink'

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
`

const CategoryHeader = ({ title, children }) => {
  return (
    <Fragment>
      <Helmet>
        <title>
          Conny Groenewegen | Re-
          {title}
        </title>
      </Helmet>
      <ReturnLink to="/">Overview</ReturnLink>
      <Heading>
        re-
        {title}
      </Heading>
      {children}
    </Fragment>
  )
}

export default CategoryHeader
