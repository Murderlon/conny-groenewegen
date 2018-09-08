import styled, { keyframes } from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export const Wrapper = styled.section`
  margin: ${({ theme }) => theme.spacing.xxlarge} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Figure = styled.figure`
  position: relative;
  display: inline-block;
  margin: 0 auto;
`

export const Figcaption = styled.figcaption`
  position: absolute;
  top: -2rem;
  left: 0;
  word-break: keep-all;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.8em;

  @media (min-width: 40em) {
    font-size: 2.3em;
  }

  > div {
    word-break: keep-all;

    color: ${({ color }) => color};
  }
`

export const Image = styled(Img)`
  object-fit: cover;
  border-radius: 50%;
  width: 16rem;
  height: 16rem;

  @media (min-width: 40em) {
    width: 20rem;
    height: 20rem;
  }

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

export const Span = styled.span`
  color: ${({ color }) => color};
`

export const Button = styled(Link)`
  position: absolute;
  right: 1rem;
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

const float = keyframes`
  from {
    transform: rotate(-0.004deg) translate3d(5px, 0, 0) rotate(-0.001deg);
  }

  to {
    transform: rotate(360.001deg) translate3d(5px, 0, 0) rotate(-360.001deg);
  }
`

export const CircleWrapper = styled.div`
  div {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    box-shadow: 0 0 10px ${({ theme }) => theme.black},
      0 0 5px ${({ theme }) => theme.black};
    opacity: 0.8;

    @media (min-width: 40em) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  div:first-of-type {
    top: 5rem;
    right: 14rem;
    animation: ${float} 10s infinite linear;

    @media (min-width: 40em) {
      right: 17rem;
    }
  }

  div:nth-of-type(2) {
    top: 3rem;
    right: 0;
    animation: ${float} 14s infinite linear;
  }

  div:last-of-type {
    top: 13rem;
    right: 12rem;
    animation: ${float} 5s infinite linear;

    @media (min-width: 40em) {
      top: 17rem;
      right: 14rem;
    }
  }
`
