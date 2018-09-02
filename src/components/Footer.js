import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'

import LogoSVG from '../icons/logo.svg'

const StyledFooter = styled.footer`
  overflow: hidden;
  color: black;

  div {
    position: relative;
    border-radius: 50%;
    background: ${({ theme }) => theme.white};
    padding-left: 8em;
    padding-top: 3em;
    left: -6em;
    bottom: -3em;
    width: 25em;
    height: 25em;
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`

const Logo = styled(LogoSVG)`
  color: ${p => p.theme.black};
  margin-top: ${({ theme }) => theme.spacing.small};
`

const Link = ({ to, children }) => (
  <GatsbyLink
    exact
    to={to}
    activeStyle={{ textDecoration: 'none', fontWeight: '600' }}
  >
    {children}
  </GatsbyLink>
)

const Footer = () => (
  <StyledFooter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/re-couture">Re-Couture</Link>
          </li>
          <li>
            <Link to="/re-space">Re-Space</Link>
          </li>
          <li>
            <Link to="/re-materialize">Re-Materialize</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Logo />
    </div>
  </StyledFooter>
)

export default Footer
