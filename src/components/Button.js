import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'

const Link = styled(GatsbyLink)`
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 3px;
  font-family: 'IBM Plex Mono, mono';
`

const Label = styled.span`
  text-transform: uppercase;
  font-family: inherit;
  color: ${({ theme }) => theme.green};
  font-size: 0.8em;
`

const Button = ({ labelText, children, to }) => (
  <Link to={to}>
    {labelText && <Label>{labelText}</Label>}
    {children}
  </Link>
)

export default Button
