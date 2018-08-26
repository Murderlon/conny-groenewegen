import React, { Fragment } from 'react'
import GatbyLink from 'gatsby-link'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import ArrowIcon from '../icons/arrow.svg'

const Heading = styled.h1`
  text-transform: uppercase;

  span {
    color: ${({ theme, color }) => theme[color]};
  }
`

const Link = styled(GatbyLink)`
  font-family: 'IBM Plex Mono', mono;
  font-weight: 400;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.small};

  svg {
    color: ${({ theme }) => theme.white};
    transform: scaleX(-1);
    margin-right: 4px;
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
      <Link to="/">
        <ArrowIcon /> Overview
      </Link>
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
