import React, { Fragment } from 'react'
import { injectGlobal } from 'styled-components'
import { func } from 'prop-types'

import base from '../styles/global/base'
import typography from '../styles/global/typography'

injectGlobal`
  ${base}
  ${typography}
`

const TemplateWrapper = ({ children }) => <Fragment>{children()}</Fragment>

TemplateWrapper.propTypes = {
  children: func
}

export default TemplateWrapper
