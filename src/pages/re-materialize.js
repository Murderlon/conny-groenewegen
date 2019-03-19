import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'

import CategoryHeader from '../components/CategoryHeader'

const Link = styled(GatsbyLink)`
  border-bottom: 1px solid white;
`

const Image = styled(Img)`
  z-index: -1;
`

const Wrapper = styled.div`
  position: relative;
  margin: ${p => p.theme.spacing.huge} 0;
`

const Element = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 1em;
  left: 1em;
  border: 2px solid ${p => p.theme.white};
  color: ${p => p.theme.white};
  padding: ${p => p.theme.spacing.small};
  width: 7em;

  span:first-child {
    align-self: flex-end;
  }

  span:nth-of-type(2) {
    align-self: center;
    font-size: 2em;
    font-weight: 500;
  }

  h2 {
    margin: 0;
    font-size: 1em;
  }
`

const ReMaterialize = ({ data }) => {
  const primaryExploresImages = data.primaryexplores.edges
  const electricoImages = data.electrico.edges

  return (
    <Fragment>
      <CategoryHeader title="Materialize" color="materializeColor" />
      <article>
        <h2>Elecric Co fabrics</h2>
        <p>
          The fabrics are knitted with plastic monofilaments, up-cycled from the
          textile industry. The looped plastic monofilament rhythmically creates
          rigidity, which allows the support and direction to softer yarns made
          of virgin wool and opulent fake fur. The knitted monofilament becomes
          a constructive 3D element in{' '}
          <Link to="https://electricco.co/">ELECTRIC CO</Link> designs that
          graphically accentuates the outlines of the upper body’s muscular
          character. By adhering to the anatomy and turning it inside out to
          create an exoskeleton, the shapes have both a futuristic and archaic
          appearance.{' '}
        </p>
        {electricoImages.map(({ node }, i) => {
          if (!node.childImageSharp) return null
          return (
            <Wrapper key={node.name}>
              <Image sizes={node.childImageSharp.sizes} />
              <Element index={i}>
                <span>0{i + 1}</span>
                <span>{node.name.substring(0, 2)}</span>
                <h2>{node.name}</h2>
              </Element>
            </Wrapper>
          )
        })}
      </article>

      <article>
        <h2>Primary Explorers fabrics</h2>
        <p>
          A delicate organza, satin or chiffon woven silk is felted on top of a
          loose and open wool knit, a method that results in tactile, compressed
          and layered fabrics. The difference in structure relates to the
          pattern and concentration of wool that varies in each knitted
          material. the designs for the{' '}
          <Link to="/re-couture/primary-explorers-tokyo-fashion-week-aw-2013-14">
            Primary Explorers collection
          </Link>{' '}
          made with this technique are 3D felted to make seamless garments.
        </p>
        {primaryExploresImages.map(({ node }, i) => {
          if (!node.childImageSharp) return null
          return (
            <Wrapper key={node.name}>
              <Image sizes={node.childImageSharp.sizes} />
              <Element index={i}>
                <span>0{i + 1}</span>
                <span>{node.name.substring(0, 2)}</span>
                <h2>{node.name}</h2>
              </Element>
            </Wrapper>
          )
        })}
      </article>
    </Fragment>
  )
}

export const MaterializeImageFragment = graphql`
  fragment MaterializeImageFragment on File {
    childImageSharp {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export const query = graphql`
  query MatializeImages {
    electrico: allFile(
      filter: { relativePath: { regex: "/materialize/electricco/" } }
    ) {
      edges {
        node {
          name
          ...MaterializeImageFragment
        }
      }
    }
    primaryexplores: allFile(
      filter: { relativePath: { regex: "/materialize/primaryexplores/" } }
    ) {
      edges {
        node {
          name
          ...MaterializeImageFragment
        }
      }
    }
  }
`

export default ReMaterialize
