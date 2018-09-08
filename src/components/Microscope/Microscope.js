import React from 'react'
import SplitText from 'react-pose-text'

import Arrow from '../../icons/arrow.svg'
import {
  Wrapper,
  Figure,
  Image,
  Figcaption,
  CircleWrapper,
  Button
} from './Mircoscope.style'

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0
  }
}

const Microscope = ({ image, activeCategory, color, children }) => (
  <Wrapper>
    <Figure>
      <Image sizes={image.sizes} />
      <Figcaption color={color}>
        re-
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          {activeCategory}
        </SplitText>
      </Figcaption>
      <CircleWrapper color={color}>
        <div />
        <div />
        <div />
      </CircleWrapper>
      <Button to={`re-${activeCategory}`} color={color}>
        Explore
        <Arrow />
      </Button>
    </Figure>
    {children}
  </Wrapper>
)

export default Microscope
