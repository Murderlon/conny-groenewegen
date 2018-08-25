import React, { Fragment } from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax'

import LogoSVG from '../icons/logo.svg'
import Footer from '../components/Footer'
import HelmetMetaTags from '../components/HelmetMetaTags'

import base from '../styles/global/base'
import typography from '../styles/global/typography'
import variables from '../styles/themes/variables'
import colors from '../styles/themes/colors'

injectGlobal`
  ${base}
  ${typography}
`

const Main = styled.main`
  margin: ${p => p.theme.spacing.medium};
`
const Logo = styled(LogoSVG)`
  color: ${p => p.theme.white};
`
const Header = styled.header`
  margin: ${p => p.theme.spacing.xlarge} 0;
  display: flex;
  justify-content: center;
`

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={{ ...colors, ...variables }}>
    <ParallaxProvider>
      <Fragment>
        <HelmetMetaTags />
        <Header>
          <Logo />
        </Header>
        <Main>{children()}</Main>
        <Footer />
      </Fragment>
    </ParallaxProvider>
  </ThemeProvider>
)

export default TemplateWrapper
