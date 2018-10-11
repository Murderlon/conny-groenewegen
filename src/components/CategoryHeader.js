import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import ReturnLink from '../components/ReturnLink'

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;

  span {
    color: ${({ theme, color }) => theme[color]};
    text-transform: lowercase;
  }
`

const CategoryHeader = ({ title, color, children }) => {
  return (
    <Fragment>
      <Helmet>
        <title>
          Conny Groenewegen | Re-
          {title}
        </title>
      </Helmet>
      <ReturnLink to="/">Overview</ReturnLink>
      <Heading color={color}>
        re-
        <span>{title}</span>
      </Heading>
      {children}
    </Fragment>
  )
}

export default CategoryHeader
