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
      <video autoPlay loop>
        <source src={src} type="video/mp4" />
        <p>
          Your browser does not support HTML5 video. Here is a{' '}
          <a href={src}>link to the video</a> instead.
        </p>
      </video>
    </div>
  </VideoWrapper>
)

export default MaskedVideo
