import React from 'React'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'

import LogoSVG from '../icons/logo.svg'

const StyledFooter = styled.footer`
  overflow: hidden;
  color: black;

  div {
    position: relative;
    border-radius: 50%;
    background: white;
    padding-left: 7em;
    padding-top: 3em;
    left: -6em;
    bottom: -3em;
    width: 25em;
    height: 25em;
  }
`

const Nav = styled.nav`
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
      <Nav>
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
      </Nav>
      <Logo />
    </div>
  </StyledFooter>
)

export default Footer
