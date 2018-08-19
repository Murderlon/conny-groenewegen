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
  top: -1em;
  left: 0;
  word-break: keep-all;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2.2em;
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
  text-transform: uppercase;
  border-radius: 3px;

  svg {
    margin-left: ${({ theme }) => theme.spacing.small};
  }
`

const FloatingCircle = styled.div`
  position: absolute;
  width: 2em;
  height: 2em;
  top: ${({ y }) => y}rem;
  right: ${({ x }) => x}rem;
  border-radius: 50%;
  background: ${({ color, theme }) =>
    `radial-gradient(${theme.white}, ${color})`};
`

const Microscope = ({ image, title, color }) => (
  <Section>
    <Figure>
      <Image sizes={image.sizes} />
      <Figcaption>
        re-
        <Span color={color}>{title}</Span>
      </Figcaption>
    </Figure>
    <Button to={`re-${title}`} color={color}>
      Explore
      <Arrow />
    </Button>
    <FloatingCircle x={2} y={2} color={color} />
    <FloatingCircle x={15} y={3} color={color} />
    <FloatingCircle x={12} y={10} color={color} />
  </Section>
)

export default Microscope
