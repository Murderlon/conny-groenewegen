import React, { Fragment, Component } from 'react'
import Img from 'gatsby-image'
import styled, { withTheme } from 'styled-components'

import Microscope from '../components/Microscope'

const Section = styled.section`
  display: flex;
`

const Image = styled(Img)`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.small};
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
        {data.allFile.edges.map(({ node }) => {
          const name = node.name.split('-')[0]
          return (
            <Microscope
              image={node.childImageSharp}
              color={categories[name]}
              title={name}
              key={name}
            />
          )
        })}

        <h2>Collectives</h2>
        <p>Some text here probably</p>
        <Section>
          <Image sizes={data.allFile.edges[0].node.childImageSharp.sizes} />
          <div>
            <h3>FaMa</h3>
            <p>
              Fashion Machine (FaMa) is commenting on and asking critical
              questions about the (waste) production of the worldwide clothing
              industry.
            </p>
          </div>
        </Section>
        <Section>
          <Image sizes={data.allFile.edges[1].node.childImageSharp.sizes} />
          <div>
            <h3>Electric Co.</h3>
            <p>
              Process driven research revealing the constructive potential of
              soft tech materials.
            </p>
          </div>
        </Section>
      </Fragment>
    )
  }
}

export const query = graphql`
  query MircoscopeImages {
    allFile(filter: { relativePath: { regex: "/preview/" } }) {
      edges {
        node {
          name
          childImageSharp {
            sizes(maxWidth: 500) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export default withTheme(Index)
