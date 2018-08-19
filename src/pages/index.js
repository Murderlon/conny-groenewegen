import React, { Fragment, Component } from 'react'
import styled, { withTheme } from 'styled-components'

import Microscope from '../components/Microscope'
import Button from '../components/Button'
import MaskedVideo from '../components/MaskedVideo'

import fama from '../images/fama.mp4'
import electricco from '../images/electricco.mp4'

const Article = styled.article`
  margin: 0 auto;
  display: block;
  max-width: 65em;
`

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const MicroscopeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Section = styled.section`
  display: flex;
  max-width: 30em;
  margin: ${({ theme }) => theme.spacing.xlarge} 0;
`

class Index extends Component {
  render() {
    const { data, theme } = this.props
    const categories = {
      couture: theme.green,
      space: theme.blue,
      materialize: theme.red
    }
    return (
      <Fragment>
        <MicroscopeWrapper>
          {Object.keys(categories).map(name => {
            return (
              <Microscope
                image={data[name].childImageSharp}
                color={categories[name]}
                title={name}
                key={name}
              />
            )
          })}
        </MicroscopeWrapper>

        <Article>
          <h2>Collectives</h2>
          <p>Some text here probably</p>
          <LayoutWrapper>
            <Section>
              <MaskedVideo src={fama} />
              <div>
                <h3>FaMa</h3>
                <p>
                  Fashion Machine (FaMa) is commenting on and asking critical
                  questions about the (waste) production of the worldwide
                  clothing industry.
                </p>
                <Button to="http://fashionmachine.org/">go to website</Button>
              </div>
            </Section>
            <Section>
              <MaskedVideo src={electricco} />
              <div>
                <h3>Electric Co.</h3>
                <p>
                  Process driven research revealing the constructive potential
                  of soft tech materials.
                </p>
                <Button to="https://electricco.co/">go to website</Button>
              </div>
            </Section>
          </LayoutWrapper>
        </Article>
      </Fragment>
    )
  }
}

export const GatsbyImageFragment = graphql`
  fragment GatsbyImageFragment on File {
    childImageSharp {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export const query = graphql`
  query images {
    couture: file(relativePath: { eq: "couture-preview.jpg" }) {
      name
      ...GatsbyImageFragment
    }

    space: file(relativePath: { eq: "space-preview.jpg" }) {
      name
      ...GatsbyImageFragment
    }

    materialize: file(relativePath: { eq: "materialize-preview.jpg" }) {
      name
      ...GatsbyImageFragment
    }
  }
`

export default withTheme(Index)
