import React from 'react'

import Arrow from '../../icons/arrow.svg'

import {
  Title,
  Wrapper,
  Image,
  CircleWrapper,
  ControlsForm,
  Category,
  Button,
  MicroscopeControlIcon
} from './Mircoscope.style'

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
