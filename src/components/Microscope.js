import React from 'react'
import styled from 'styled-components'

import couture from '../images/couture-preview.jpg'

const Figure = styled.figure`
  margin: 0;
  display: flex;
  justify-content: center;
`

const Figcaption = styled.figcaption`
  position: absolute;
  left: -${p => p.theme.spacing.xlarge};
  top: ${p => p.theme.spacing.xlarge};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 3em;
  transform: rotate(90deg);
  z-index: 100;

  span {
    color: ${p => p.theme.green};
  }
`

const Wrapper = styled.div`
  position: relative;
`

const ImageWrapper = styled.div`
  position: relative;
  margin: 0;
  width: 17em;
  height: 17em;

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

const Image = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`

const Microscope = () => (
  <Figure>
    <Wrapper>
      <ImageWrapper>
        <Image src={couture} alt="pull up skurt" />
      </ImageWrapper>
      <Figcaption>
        <span>re:</span>couture
      </Figcaption>
    </Wrapper>
  </Figure>
)

export default Microscope
