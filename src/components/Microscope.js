import React from 'react'
import styled, { keyframes } from 'styled-components'
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

const float = keyframes`
  from {
    transform: rotate(-0.004deg) translate3d(5px, 0, 0) rotate(-0.001deg);
  }

  to {
    transform: rotate(360.001deg) translate3d(5px, 0, 0) rotate(-360.001deg);
  }
`

const CircleWrapper = styled.div`
  div {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${({ color, theme }) =>
      `radial-gradient(${theme.white}, ${color})`};
  }

  div:first-of-type {
    top: 5rem;
    right: 14rem;
    animation: ${float} 10s infinite linear;
  }

  div:nth-of-type(2) {
    top: 3rem;
    right: 3rem;
    animation: ${float} 14s infinite linear;
  }

  div:last-of-type {
    top: 10rem;
    right: 4rem;
    animation: ${float} 5s infinite linear;
  }
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
      <CircleWrapper color={color}>
        <div />
        <div />
        <div />
      </CircleWrapper>
    </Figure>
    <Button to={`re-${title}`}>
      Explore
      <Arrow />
    </Button>
  </Wrapper>
)

export default Microscope
