import React from 'react'
import styled from 'styled-components'

const VideoWrapper = styled.div`
  margin-right: ${({ theme }) => theme.spacing.small};

  div {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    overflow: hidden;
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
      <video autoPlay loop playsinline muted>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  </VideoWrapper>
)

export default MaskedVideo
