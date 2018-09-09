import React, { Fragment, Component } from 'react'
import styled, { withTheme } from 'styled-components'

import Microscope from '../components/Microscope/Microscope'
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
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  max-width: 65em;
`

const Section = styled.section`
  display: flex;
  max-width: 30em;
  margin: ${({ theme }) => theme.spacing.xlarge} 0;
`

class Index extends Component {
  constructor(props) {
    super(props)
    this.colors = {
      space: this.props.theme.blue,
      couture: this.props.theme.green,
      materialize: this.props.theme.red
    }
    this.state = {
      categories: [
        { label: 'Space', name: 'category', value: 'space' },
        { label: 'Couture', name: 'category', value: 'couture' },
        { label: 'Materialize', name: 'category', value: 'materialize' }
      ],
      active: { category: 'couture', color: this.props.theme.green }
    }
  }

  handleCategoryChange = ({ target }) => {
    if (target.value !== this.state.active.category) {
      let nextActiveIndex
      let nextState
      const { categories } = this.state

      categories.forEach(cat => {
        if (cat.value === target.value) {
          nextActiveIndex = categories.indexOf(cat)
        }
      })
      if (nextActiveIndex === 0) {
        nextState = {
          active: { category: target.value, color: this.colors[target.value] },
          categories: [
            categories[nextActiveIndex + 1],
            categories[nextActiveIndex],
            categories[nextActiveIndex + 2]
          ]
        }
      } else {
        nextState = {
          active: { category: target.value, color: this.colors[target.value] },
          categories: [
            categories[nextActiveIndex - 2],
            categories[nextActiveIndex],
            categories[nextActiveIndex - 1]
          ]
        }
      }
      return this.setState(nextState)
    }
  }

  render() {
    const { data } = this.props
    const { category, color } = this.state.active
    return (
      <Fragment>
        <MicroscopeWrapper>
          <Microscope
            image={data[category].childImageSharp}
            color={color}
            categories={this.state.categories}
            activeCategory={category}
            onChange={this.handleCategoryChange}
          />
        </MicroscopeWrapper>

        <Article>
          <h2>Collectives</h2>
          <p>[needs explanation]</p>
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
