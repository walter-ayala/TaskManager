import BottomTab from '../components/Common/BottomTab'
import SearchBar from '../components/Common/SearchBar'
import SideBar from '../components/Common/Sidebar'
import DashboardSection from '../components/Dashboard/DashboardSection'
import ThemeLayout from '../layout/ThemeLayout'
import { FlexContainer, GeneralContainer, MainSection } from '../styles'

const Dashboard: React.FC = () => {
  return (
    <ThemeLayout>
      <GeneralContainer>
        <FlexContainer>
          <SideBar />
          <MainSection>
            <SearchBar />
            <DashboardSection/>
          </MainSection>
        </FlexContainer>
        <BottomTab/>
      </GeneralContainer>
    </ThemeLayout>
  )
}

export default Dashboard
