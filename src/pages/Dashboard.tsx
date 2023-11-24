import styled from 'styled-components'
import SearchBar from '../components/Common/SearchBar'
import SideBar from '../components/Common/Sidebar'
import DashboardSection from '../components/Dashboard/DashboardSection'
import ThemeLayout from '../layout/ThemeLayout'

const Dashboard: React.FC = () => {
  return (
    <ThemeLayout>
      <Container>
        <FlexContainer>
          <SideBar />
          <MainSection>
            <SearchBar />
            <DashboardSection/>
          </MainSection>
        </FlexContainer>
      </Container>
    </ThemeLayout>
  )
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: sans-serif;
  background-color: ${(props) => props.theme.backgroundDark};
`

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 32px;
  gap: 32px;
`

const MainSection = styled.div`
  display: flex;
  width: 100%;
  gap: 36px;
  flex-direction: column;  
  background-color: ${(props) => props.theme.backgroundDark};
`

export default Dashboard
