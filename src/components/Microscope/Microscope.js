import React from 'react'
import posed, { PoseGroup } from 'react-pose'

import Arrow from '../../icons/arrow.svg'
import {
  Wrapper,
  Image,
  CircleWrapper,
  ControlsForm,
  Button
} from './Mircoscope.style'

const Div = posed.div({
  flip: {
    scale: 1,
    transition: {
      scale: {
        type: 'spring',
        velocity: 3
      },
      default: {
        type: 'spring'
      }
    }
  }
})

const Microscope = ({ image, categories, activeCategory, color, onChange }) => (
  <Wrapper>
    <Image sizes={image.sizes} />
    <ControlsForm color={color}>
      <span>RE-</span>
      <div>
        <PoseGroup>
          {categories.map(({ label, name, value }) => {
            return (
              <Div key={value}>
                <input
                  id={value}
                  type="radio"
                  name={name}
                  value={value}
                  checked={activeCategory === value && activeCategory}
                  onChange={onChange}
                />
                <label htmlFor={value}>{label}</label>
              </Div>
            )
          })}
        </PoseGroup>
      </div>
    </ControlsForm>
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
)

export default Microscope
