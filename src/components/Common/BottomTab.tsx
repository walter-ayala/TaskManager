import { Link, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import DashboardIcon from '../../assets/icons/DashboardIcon'
import SettingsIcon from '../../assets/icons/SettingsIcon'
import { type OptionSelected } from '../../types'

const BottomTab: React.FC = () => {
  const location = useLocation()

  return (
    <Container>
      <Menu to={'/'} selected={location.pathname === '/'}>
        <DashboardIcon />
        <TitleTab>Dashboard</TitleTab>
      </Menu>
      <Menu to={'/settings'} selected={location.pathname === '/settings'}>
        <SettingsIcon />
        <TitleTab>Settings</TitleTab>
      </Menu>
    </Container>
  )
}

const Container = styled.div`
  display: none;
  position: fixed;
  bottom: 0px;
  flex-direction: row;
  justify-content: space-between;
  height: 79px;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundDark};
  @media only screen and (max-width: 850px) {
    display: flex;
  }
`

const Menu = styled(Link) <OptionSelected>`
  width: 50%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 100%;
  padding: 19px;
  background-color: ${(props) => props.theme.backgroundLight};
  color: ${(props) => props.theme.neutral};
  fill: ${(props) => props.theme.neutral};
  &:hover {
    color: ${(props) => props.theme.primary};
    fill: ${(props) => props.theme.primary};
  }
  ${(props) => {
    if (props.selected) {
      return css`
        color: ${(props) => props.theme.primary};
        fill: ${(props) => props.theme.primary};
      `
    }
  }}
`

const TitleTab = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.75px;
`
export default BottomTab
