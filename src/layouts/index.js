import React, { Fragment } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { func } from 'prop-types'

import base from '../styles/global/base'
import typography from '../styles/global/typography'
import variables from '../styles/themes/variables'
import colors from '../styles/themes/colors'

injectGlobal`
  ${base}
  ${typography}
`

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={{ ...colors, ...variables }}>
    <Fragment>{children()}</Fragment>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: func
}

export default TemplateWrapper
