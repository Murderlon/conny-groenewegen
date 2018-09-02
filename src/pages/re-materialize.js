import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { transparentize } from 'polished'

import CategoryHeader from '../components/CategoryHeader'

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
  background: ${p => transparentize(0.6, p.theme.black)};
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
  const content = {
    Tania:
      'Felted knit in wool/angora/silk yarn partly and seamlessly layered with a fine woven silk satin.',
    Gerlinde:
      'Felted knit in wool/angora/silk yarn partly and seamlessly layered with a fine woven silk satin.',
    Octavie: 'Striped and felted knit in wool/angora and cotton.',
    Renata: 'Structure knit in retro-reflective yarn with glass microbeads.',
    Mimas: 'Analine leather surface connected to a layer of hand knit wool.',
    Aimee:
      'Felted wool/angora and silk knit with bubbly and soft hairy surface',
    Krystyna:
      'Felted wool/angora knit with a layer of silk organza which seamlessly merges into a singular semi-transparent organza fabric.',
    Kay:
      'Felted wool/angora knit with a layer of silk organza resulting in light organza ruffles at the hem.'
  }
  return (
    <Fragment>
      <CategoryHeader title="materialize" color="red">
        Developed fabrics for the Primary Explorers Collection. The fabrics are
        6gg loose knitted open structures with mixed wool/ angora and silk or
        cotton yarn. Afterwards the open lightweight knits are stuck on a
        delicate skin of fine woven and firmly compressed with a hot washing.
        The organza, satin or chiffon silk fabric is sticking to the shrunk knit
        like a wrinkled skin. Because of a pattern of various concentrations of
        wool, the knit starts to shrink in different proportions according to
        the density of the wool in regards to the cotton or silk yarn. This make
        the fabrics go freaky and bubbly and make you want to touch it.
      </CategoryHeader>
      {Object.keys(data).map((key, i) => {
        return (
          <Wrapper key={key}>
            <Image sizes={data[key].childImageSharp.sizes} />
            <Element>
              <span>0{i + 1}</span>
              <span>{key.substring(0, 2)}</span>
              <h2>{key}</h2>
            </Element>
            <p>{content[key]}</p>
          </Wrapper>
        )
      })}
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
  query MaterializeImages {
    Tania: file(id: { regex: "/Tania/" }) {
      ...MaterializeImageFragment
    }
    Gerlinde: file(id: { regex: "/Gerlinde/" }) {
      ...MaterializeImageFragment
    }
    Octavie: file(id: { regex: "/Octavie/" }) {
      ...MaterializeImageFragment
    }
    Renata: file(id: { regex: "/Renata/" }) {
      ...MaterializeImageFragment
    }
    Mimas: file(id: { regex: "/Mimas/" }) {
      ...MaterializeImageFragment
    }
    Aimee: file(id: { regex: "/Aimee/" }) {
      ...MaterializeImageFragment
    }
    Krystyna: file(id: { regex: "/Krystyna/" }) {
      ...MaterializeImageFragment
    }
    Kay: file(id: { regex: "/Kay/" }) {
      ...MaterializeImageFragment
    }
  }
`

export default ReMaterialize
