import React from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

import Arrow from '../../icons/arrow.svg'

import {
  Title,
  Wrapper,
  Image,
  CircleWrapper,
  ControlsForm,
  Button,
  MicroscopeControlIcon
} from './Mircoscope.style'

const Div = posed.div({
  space: {
    x: 84,
    z: p => console.log(p),
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
})

const Category = styled(Div)`
  flex: 1 1 0;

  &:first-of-type {
    text-align: right;
  }

  &:nth-of-type(2) {
    padding: 0 ${({ theme }) => theme.spacing.small};
    text-align: center;
  }

  input[type='radio'] {
    position: absolute;
    clip: rect(0, 0, 0, 0);

    + label {
      margin: 0;
      font-size: 0.9em;
    }

    &:not(:checked) + label {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`

const Microscope = ({ image, categories, activeCategory, color, onChange }) => (
  <div>
    <Title color={color}>
      Re-
      <span>{activeCategory}</span>
    </Title>
    <Wrapper>
      <Image sizes={image.sizes} />
      <CircleWrapper color={color}>
        <div />
        <div />
        <div />
      </CircleWrapper>
      <Button to={`re-${activeCategory}`} color={color}>
        Explore
        <Arrow />
      </Button>
    </Wrapper>
    <MicroscopeControlIcon />
    <ControlsForm color={color}>
      {categories.map(({ label, name, value }, i) => {
        return (
          <Category
            key={value}
            initialPose={activeCategory}
            pose={activeCategory}
            i={i}
          >
            <input
              id={value}
              type="radio"
              name={name}
              value={value}
              checked={activeCategory === value && activeCategory}
              onChange={onChange}
            />
            <label htmlFor={value}>{label}</label>
          </Category>
        )
      })}
    </ControlsForm>
  </div>
)

export default Microscope
