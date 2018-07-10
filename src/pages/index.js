import React, { Fragment } from 'react'
import styled from 'styled-components'

import LogoSVG from '../icons/logo.svg'
import Microscope from '../components/Microscope'

const Logo = styled(LogoSVG)`
  color: ${p => p.theme.white};
`
const Header = styled.header`
  margin: ${p => p.theme.spacing.xlarge} 0;
  display: flex;
  justify-content: center;
`

const Main = styled.main`
  margin: ${p => p.theme.spacing.medium};
`

const Index = () => (
  <Fragment>
    <Header>
      <Logo />
    </Header>
    <Main>
      <Microscope />
    </Main>
  </Fragment>
)

export default Index
