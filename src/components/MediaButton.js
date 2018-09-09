import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  display: inline-block;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.medium};

  div {
    display: flex;
    flex-direction: column;

    span {
      color: ${({ labelColor }) => labelColor};
      text-transform: uppercase;
      font-size: 0.8em;
      font-family: 'IBM Plex Mono', mono;
    }
  }
`
const MediaButton = ({ to, borderColor, label, labelColor, children }) => {
  return (
    <Link href={to} borderColor={borderColor} labelColor={labelColor}>
      <div>
        {label && <span>{label}</span>}
        {children}
      </div>
    </Link>
  )
}

export default MediaButton
