import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Arrow from '../icons/arrow.svg'

const Section = styled.section`
  position: relative;
`

const Figure = styled.figure`
  margin: ${p => p.theme.spacing.huge} 0;
  display: flex;
  justify-content: center;
`

const Figcaption = styled.figcaption`
  position: absolute;
  top: 0;
  word-break: keep-all;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2.5em;
`

const Wrapper = styled.div`
  position: relative;
`

const Image = styled(Img)`
  object-fit: cover;
  border-radius: 50%;
  width: 15em;
  height: 15em;

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 20px ${({ theme }) => theme.black},
      inset 0 0 10px ${({ theme }) => theme.black},
      inset 0 0 5px ${({ theme }) => theme.black};
    border-radius: 50%;
  }
`

const Span = styled.span`
  color: ${({ color }) => color};
`

const Button = styled(Link)`
  position: absolute;
  right: 2em;
  bottom: 0;
  background: ${({ color }) => color};
  color: ${({ theme }) => theme.black};
  padding: ${({ theme }) => `${theme.spacing.xsmall} ${theme.spacing.small}`};
  font-family: 'IBM Plex Mono', mono;
  font-weight: 500;
  border-radius: 3px;

  svg {
    margin-left: ${({ theme }) => theme.spacing.small};
  }
`

const Microscope = ({ image, title, color }) => (
  <Section>
    <Figure>
      <Wrapper>
        <Image sizes={image.sizes} />
        <Figcaption>
          <Span color={color}>re-</Span>
          {title}
        </Figcaption>
      </Wrapper>
    </Figure>
    <Button to={`re-${title}`} color={color}>
      Explore
      <Arrow />
    </Button>
  </Section>
)

export default Microscope
