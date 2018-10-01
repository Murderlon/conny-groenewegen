import React, { Fragment, Component } from 'react'
import styled, { withTheme } from 'styled-components'

import Microscope from '../components/Microscope/Microscope'
import Button from '../components/Button'
import MaskedVideo from '../components/MaskedVideo'

import fama from '../images/fama.mp4'
import electricco from '../images/electricco.mp4'

const Article = styled.article`
  margin: 0 auto;
  max-width: 65em;
`

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const MicroscopeWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.enormous} auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 65em;

  @media (min-width: 40em) {
    align-items: center;
  }
`

const Section = styled.section`
  display: flex;
  margin: ${({ theme }) => theme.spacing.xlarge} 0;

  @media (min-width: 50em) {
    max-width: 25em;
  }
`

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        { label: 'Space', name: 'category', value: 'space' },
        { label: 'Couture', name: 'category', value: 'couture' },
        { label: 'Materialize', name: 'category', value: 'materialize' }
      ],
      active: { category: 'couture' }
    }
  }

  handleCategoryChange = ({ target }) => {
    if (target.value !== this.state.active.category) {
      return this.setState({
        active: { category: target.value }
      })
    }
  }

  render() {
    const { data } = this.props
    const { category } = this.state.active
    return (
      <Fragment>
        <MicroscopeWrapper>
          <Microscope
            image={data[category].childImageSharp}
            categories={this.state.categories}
            activeCategory={category}
            onChange={this.handleCategoryChange}
          />
        </MicroscopeWrapper>

        <Article>
          <h2>Collectives</h2>
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
      ...GatsbyImageFragment
    }

    space: file(relativePath: { eq: "space-preview.jpg" }) {
      ...GatsbyImageFragment
    }

    materialize: file(relativePath: { eq: "materialize-preview.jpg" }) {
      ...GatsbyImageFragment
    }
  }
`

export default withTheme(Index)
