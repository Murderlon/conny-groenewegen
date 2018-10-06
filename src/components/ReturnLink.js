import React from 'react'
import GatbyLink from 'gatsby-link'
import styled from 'styled-components'

import ArrowIcon from '../icons/arrow.svg'

const Link = styled(GatbyLink)`
  font-family: 'IBM Plex Mono', mono;
  font-weight: 400;
  display: block;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.small};

  svg {
    color: ${({ theme }) => theme.white};
    transform: scaleX(-1);
    margin-right: 4px;
  }
`

const ReturnLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <ArrowIcon /> {children}
    </Link>
  )
}

export default ReturnLink
