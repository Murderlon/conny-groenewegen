import React from 'react'
import styled from 'styled-components'

const VideoWrapper = styled.div`
  margin-right: ${({ theme }) => theme.spacing.small};

  div {
    position: relative;
    width: 5em;
    height: 5em;
    border-radius: 50%;
    overflow: hidden;

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
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const MaskedVideo = ({ src }) => (
  <VideoWrapper>
    <div>
      <video autoPlay loop playsInline muted>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  </VideoWrapper>
)

export default MaskedVideo
