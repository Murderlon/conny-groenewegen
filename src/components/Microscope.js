import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Arrow from '../icons/arrow.svg'

const Wrapper = styled.section`
  position: relative;
  display: inline-block;
`

const Figure = styled.figure`
  margin: ${({ theme }) => theme.spacing.huge} 0;
  display: flex;
  justify-content: center;
`

const Figcaption = styled.figcaption`
  position: absolute;
  top: 2rem;
  left: -1rem;
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
  right: 0;
  bottom: 4rem;
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
  <section>
    <Wrapper>
      <Figure>
        <Image sizes={image.sizes} />
        <Figcaption>
          re-
          <Span color={color}>{title}</Span>
        </Figcaption>
      </Figure>
      <Button to={`re-${title}`}>
        Explore
        <Arrow />
      </Button>
      <FloatingCircle x={2} y={7} color={color} />
      <FloatingCircle x={14} y={10} color={color} />
      <FloatingCircle x={12} y={15} color={color} />
    </Wrapper>
  </section>
)

export default Microscope
