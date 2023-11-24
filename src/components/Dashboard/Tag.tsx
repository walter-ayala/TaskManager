import styled, { css } from 'styled-components'
import { type Tags } from '../../types'

const Tag: React.FC<Tags> = ({ first, name }) => {
  return (
    <Container first={first}>
      {name}
    </Container>
  )
}

const Container = styled.div<Partial<Tags>>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  height: 32px;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  ${(props) => {
    if (props.first === true) {
      return css`
        background-color: rgba(112, 178, 82, 0.1);
        color: ${props.theme.secondary};
      `
    }
    return css`
        background-color: rgba(229, 180, 84, 0.1);
        color: ${props.theme.tertiary};
      `
  }}
`

export default Tag
