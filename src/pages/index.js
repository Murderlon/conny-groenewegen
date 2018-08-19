import React, { Fragment, Component } from 'react'
import GatsbyImage from 'gatsby-image'
import styled, { withTheme } from 'styled-components'

import Microscope from '../components/Microscope'
import Button from '../components/Button'
import FamaGif from '../images/fama.gif'

const Article = styled.article`
  margin-top: ${({ theme }) => theme.spacing.huge};
`

const Section = styled.section`
  display: flex;
  margin: ${({ theme }) => theme.spacing.xlarge} 0;
`

const Image = styled(GatsbyImage)`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.small};
`

const Img = Image.withComponent('img')

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

        <Article>
          <h2>Collectives</h2>
          <p>Some text here probably</p>
          <Section>
            <Img src={FamaGif} alt="looping images of a FaMa project" />
            <div>
              <h3>FaMa</h3>
              <p>
                Fashion Machine (FaMa) is commenting on and asking critical
                questions about the (waste) production of the worldwide clothing
                industry.
              </p>
              <Button to="http://fashionmachine.org/">go to website</Button>
            </div>
          </Section>
          <Section>
            <Image sizes={data.couture.childImageSharp.sizes} />
            <div>
              <h3>Electric Co.</h3>
              <p>
                Process driven research revealing the constructive potential of
                soft tech materials.
              </p>
              <Button to="https://electricco.co/">go to website</Button>
            </div>
          </Section>
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
