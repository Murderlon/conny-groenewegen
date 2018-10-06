import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";
import Img from "gatsby-image";
import posed from "react-pose";

import ControlIcon from "../../icons/microscope.svg";

export const Div = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  position: absolute;
  z-index: 2;
  left: 0;
  font-weight: 700;
  margin: 0;

  @media (min-width: 40em) {
    font-size: 2em;
  }

  span {
    color: ${({ color }) => color};
    text-transform: capitalize;
    display: inline-block;
  }
`;

export const Wrapper = styled.section`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
    content: "";
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 20px ${({ theme }) => theme.black},
      inset 0 0 10px ${({ theme }) => theme.black},
      inset 0 0 5px ${({ theme }) => theme.black};
    border-radius: 50%;
  }
`;

export const Span = styled.span`
  color: ${({ color }) => color};
`;

export const Button = styled(Link)`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: ${({ color }) => color};
  color: ${({ theme }) => theme.black};
  padding: ${({ theme }) => `${theme.spacing.xsmall} ${theme.spacing.small}`};
  font-family: "IBM Plex Mono", mono;
  text-transform: uppercase;
  border-radius: 3px;

  svg {
    margin-left: ${({ theme }) => theme.spacing.small};
  }
`;

const float = keyframes`
  from {
    transform: rotate(-0.004deg) translate3d(8px, 0, 0) rotate(-0.001deg);
  }

  to {
    transform: rotate(360.001deg) translate3d(8px, 0, 0) rotate(-360.001deg);
  }
`;

export const CircleWrapper = styled.div`
  div {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.white};

    @media (min-width: 40em) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  div:first-of-type {
    top: 12rem;
    right: 12rem;
    animation: ${float} 10s infinite linear;

    @media (min-width: 40em) {
      right: 17rem;
    }
  }

  div:nth-of-type(2) {
    top: 0;
    right: 0;
    animation: ${float} 14s infinite linear;
  }

  div:last-of-type {
    top: 0;
    left: 20rem;
    animation: ${float} 5s infinite linear;

    @media (min-width: 40em) {
      top: 17rem;
      right: 14rem;
    }
  }
`;

export const ControlsForm = styled.form`
  max-width: 256px;
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.medium} auto;
  text-transform: uppercase;
  font-family: "IBM Plex Mono", mono;
`;
export const MicroscopeControlIcon = styled(ControlIcon)`
  width: 14em;
  display: block;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing.small};
`;

const Posed = posed.div({
  space: {
    x: 84,
    y: ({ i }) => (i == 0 ? 0 : i == 1 ? -10 : -30),
    opacity: ({ i }) => (i == 0 ? 1 : 0.6)
  },
  couture: {
    x: 17,
    y: ({ i }) => (i !== 1 ? -10 : 0),
    opacity: ({ i }) => (i !== 1 ? 0.6 : 1)
  },
  materialize: {
    x: -77,
    y: ({ i }) => (i == 0 ? -30 : i == 1 ? -10 : 0),
    opacity: ({ i }) => (i == 2 ? 1 : 0.6)
  }
});

export const Category = styled(Posed)`
  flex: 1 1 0;

  &:first-of-type {
    text-align: right;
  }

  &:nth-of-type(2) {
    padding: 0 ${({ theme }) => theme.spacing.small};
    text-align: center;
  }

  input[type="radio"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);

    + label {
      margin: 0;
      font-size: 0.9em;
    }

    &:not(:checked) + label {
      cursor: pointer;
    }
  }
`;
