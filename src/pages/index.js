import React from 'react'
import styled from 'styled-components'

import LogoSVG from '../icons/logo.svg'
import Microscope from '../components/Microscope'

const Logo = styled(LogoSVG)`
  color: ${p => p.theme.white};
`
const Header = styled.header`
  margin: ${p => p.theme.spacing.medium};
`

const Index = () => (
  <Header>
    <Logo />
    <Microscope />
  </Header>
)

export default Index
