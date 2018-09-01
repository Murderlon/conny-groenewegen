import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import ReturnLink from '../components/ReturnLink'

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;

  span {
    color: ${({ theme, color }) => theme[color]};
  }
`

const CategoryHeader = ({ title, color }) => {
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
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Fragment>
  )
}

export default CategoryHeader
