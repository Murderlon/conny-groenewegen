import React from 'react'
import styled from 'styled-components'

import couture from '../images/couture-preview.jpg'

const Figure = styled.figure`
  width: 150px;
  height: 150px;
  position: relative;

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    display: block;
    width: 100%;
    box-shadow: inset 0 0 20px ${({ theme }) => theme.black},
      inset 0 0 10px ${({ theme }) => theme.black},
      inset 0 0 5px ${({ theme }) => theme.black};
    border-radius: 50%;
    height: 100%;
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
    <Image src={couture} alt="pull up skurt" />
    <figcaption>re:couture</figcaption>
  </Figure>
)

export default Microscope
