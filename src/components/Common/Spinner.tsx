import React from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  children: JSX.Element

}

const Spinner: React.FC<Props> = ({ children }) => {
  return (
    <SpinnerContainer>
      <LoadingSpinner />
      {children}
    </SpinnerContainer>
  )
}

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  column-gap: 20px;
  padding: 10px;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`
const SpinnerAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 10px solid #f3f3f3; 
  border-top: 10px solid #383636; 
  border-radius: 50%;
  animation: ${SpinnerAnimation} 1.5s linear infinite;
`

export default Spinner
