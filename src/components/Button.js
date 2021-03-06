import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'

const Link = styled(GatsbyLink)`
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 3px;
  font-family: 'IBM Plex Mono', mono;
  font-size: 0.8em;
  text-transform: uppercase;
  display: inline-block;
`

const Label = styled.span`
  text-transform: uppercase;
  font-family: inherit;
  color: ${({ theme }) => theme.yellow};
  font-size: 0.8em;
`
const ExternalLink = Link.withComponent('a')

const Button = ({ labelText, children, to }) => {
  const internal = /^\/(?!\/)/.test(to)

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <Link to={to}>
        {labelText && <Label>{labelText}</Label>}
        {children}
      </Link>
    )
  }
  return (
    <ExternalLink href={to}>
      {labelText && <Label>{labelText}</Label>}
      {children}
    </ExternalLink>
  )
}

export default Button
