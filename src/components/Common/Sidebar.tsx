import { Link, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import DashboardIcon from '../../assets/icons/DashboardIcon'
import RavnLogo from '../../assets/icons/RavnLogo'
import SettingsIcon from '../../assets/icons/SettingsIcon'
import { type OptionSelected } from '../../types'

const SideBar: React.FC = () => {
  const location = useLocation()

  return (
    <Container>
      <LogoContainer>
        <RavnLogo />
      </LogoContainer>
      <div>
        <Tab to={'/'} selected={location.pathname === '/'}>
          <DashboardIcon />
          <TitleTab>DASHBOARD</TitleTab>
        </Tab>
        <Tab to={'/settings'} selected={location.pathname === '/settings'}>
          <SettingsIcon />
          <TitleTab>SETTINGS</TitleTab>
        </Tab>
      </div>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 24px;
  background-color: ${(props) => props.theme.backgroundLight};
  min-width: 232px;
  min-height: 800px;
  padding-top: 14px;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`

const LogoContainer = styled.div`
  padding-bottom: 46px;
  display: flex;
  justify-content: center;
`

const Tab = styled(Link)<OptionSelected>`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 19px;
  padding: 19px;
  color: ${(props) => props.theme.neutral};
  fill: ${(props) => props.theme.neutral};
  &:hover {
    color: ${(props) => props.theme.primary};
    fill: ${(props) => props.theme.primary};
  }
  ${(props) => {
    if (props.selected) {
      return css`
        background-image: linear-gradient(
          to right,
          transparent,
          rgb(210, 77, 77, 0.1)
        );
        color: ${(props) => props.theme.primary};
        fill: ${(props) => props.theme.primary};
        border-right: solid 4px ${(props) => props.theme.primary};
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

export default SideBar
