import BottomTab from '../components/Common/BottomTab'
import SearchBar from '../components/Common/SearchBar'
import SideBar from '../components/Common/Sidebar'
import ProfileSection from '../components/Settings/ProfileSection'
import ThemeLayout from '../layout/ThemeLayout'
import { FlexContainer, GeneralContainer, MainSection } from '../styles'

const Settings: React.FC = () => {
  return (
    <ThemeLayout>
      <GeneralContainer>
        <FlexContainer>
          <SideBar />
          <MainSection>
            <SearchBar />
            <ProfileSection/>
          </MainSection>
        </FlexContainer>
        <BottomTab/>
      </GeneralContainer>
    </ThemeLayout>
  )
}

export default Settings
