import React, { Fragment, Component } from 'react'
import { withTheme } from 'styled-components'

import Microscope from '../components/Microscope'

class Index extends Component {
  render() {
    const { data, theme } = this.props
    return (
      <Fragment>
        <Microscope
          image={data.file.childImageSharp}
          color={theme.green}
          title="couture"
        />
        <h2>Collectives</h2>
        <section>
          <h3>FaMa</h3>
          <p>
            Fashion Machine (FaMa) is commenting on and asking critical
            questions about the (waste) production of the worldwide clothing
            industry.
          </p>
        </section>
        <section>
          <h3>Electric Co.</h3>
          <p>
            Process driven research revealing the constructive potential of soft
            tech materials.
          </p>
        </section>
      </Fragment>
    )
  }
}

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "couture-preview.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default withTheme(Index)
