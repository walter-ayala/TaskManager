import { Link, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import AddIcon from '../../assets/icons/AddIcon'
import DashboardIcon from '../../assets/icons/DashboardIcon'
import { type TabSidebar } from '../../types'

const TopBar: React.FC = () => {
  const location = useLocation()

  return (
    <Container>
      <SwitchContainer>
        <Link to={'/'} >
          <SwitchButtons selected={location.pathname === '/'}>
            <DashboardIcon />
          </SwitchButtons>
        </Link>
      </SwitchContainer>
      <AddButton>
        <AddIcon />
      </AddButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SwitchContainer = styled.div`
  display: flex;
  gap: 12px;
  a{
    text-decoration: none;
  }
`

const SwitchButtons = styled.button<TabSidebar>`
  display: flex;
  background: transparent;
  padding: 11px;
  fill: ${(props) => props.theme.white};
  border: none;
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.theme.primary};
  }
  ${(props) => {
    if (props.selected) {
      return css`
        fill: ${(props) => props.theme.primary};
        border: solid 1px ${(props) => props.theme.primary};
        border-radius: 4px;
      `
    }
  }}
`

const AddButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

export default TopBar
