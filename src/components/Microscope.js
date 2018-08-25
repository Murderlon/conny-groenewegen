import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Parallax } from 'react-scroll-parallax'

import Arrow from '../icons/arrow.svg'

const Wrapper = styled.section`
  margin: ${({ theme }) => theme.spacing.xxlarge} 0;
  position: relative;
  display: inline-block;
`

const Figure = styled.figure`
  display: flex;
  justify-content: center;
`

const Figcaption = styled.figcaption`
  position: absolute;
  top: -1rem;
  left: 2rem;
  word-break: keep-all;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2.2em;
`

const Image = styled(Img)`
  object-fit: cover;
  border-radius: 50%;
  width: 15rem;
  height: 15rem;

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
  right: 3rem;
  bottom: 2rem;
  background: ${({ theme }) => theme.white};
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
  width: 2rem;
  height: 2rem;
  top: ${({ y }) => y}rem;
  right: ${({ x }) => x}rem;
  border-radius: 50%;
  background: ${({ color, theme }) =>
    `radial-gradient(${theme.white}, ${color})`};
`

const Microscope = ({ image, title, color }) => (
  <Wrapper>
    <Figure>
      <Parallax offsetYMax={15} offsetYMin={-15} slowerScrollRate>
        <Image sizes={image.sizes} />
      </Parallax>
      <Figcaption>
        re-
        <Span color={color}>{title}</Span>
      </Figcaption>
      <FloatingCircle x={2} y={7} color={color} />
      <FloatingCircle x={14} y={3} color={color} />
      <FloatingCircle x={12} y={12} color={color} />
    </Figure>
    <Button to={`re-${title}`}>
      Explore
      <Arrow />
    </Button>
  </Wrapper>
)

export default Microscope
