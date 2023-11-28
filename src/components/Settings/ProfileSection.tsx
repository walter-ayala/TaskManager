import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { GET_PROFILE } from '../../api/Settings/getProfile'
import ProfileAvatar from '../../assets/images/ProfileAvatar.png'
import Spinner from '../Common/Spinner'
import { DateTime } from 'luxon'

const ProfileSection = () => {
  const { loading, error, data } = useQuery(GET_PROFILE)

  if (loading) {
    return (
      <SmallContainer>
        <Spinner>
          <Information>Loading profile</Information>
        </Spinner>
      </SmallContainer>
    )
  }

  if (error != null) {
    return (
      <SmallContainer>
        <Information>An error occured {error.message}</Information>
      </SmallContainer>
    )
  }
  return (
    <Container>
      <PersonalData>
        <img src={ProfileAvatar} alt="profileAvatar" width={150} height={150} style={{ borderRadius: '50%' }}></img>
        <VerticalContainer>
          <Information>{data?.profile.fullName}</Information>
          <Information>{data?.profile.email}</Information>
        </VerticalContainer>
      </PersonalData>
      <AdditionalInformation>
        <Information>Created at:</Information>
        <Information>{DateTime.fromISO(data?.profile.createdAt).toFormat('dd LLL, yyyy')}</Information>
      </AdditionalInformation>
      <AdditionalInformation>
        <Information>Updated at:</Information>
        <Information>{DateTime.fromISO(data?.profile.updatedAt).toFormat('dd LLL, yyyy')}</Information>
      </AdditionalInformation>
      <AdditionalInformation>
        <Information>Type user:</Information>
        <Information>{data?.profile.type}</Information>
      </AdditionalInformation>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  margin: 10px 10px 10px 0px;
  height: 75vh;
  width: 100%;
  justify-content: flex-start;
  border-radius: 8px;
  background-color: ${(props) => props.theme.backgroundLight};
  padding: 40px;
  height: 80vh;
  box-sizing: border-box;
  overflow-y: auto;
  @media only screen and (max-width: 850px) {
    margin-bottom: 79px;
  }
`

const PersonalData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  border: 1px solid ${(props) => props.theme.neutral};
  border-radius: 8px;
  padding: 20px 0px;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Information = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
`

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: flex-end;
  @media only screen and (max-width: 850px) {
    justify-content: center;
    align-items: center;
  }
`

const AdditionalInformation = styled(PersonalData)`
  border: none;
`

const SmallContainer = styled.div`
  display: flex;
  margin: 10px 10px 10px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 300px;
  background-color: ${(props) => props.theme.backgroundLight};
`

export default ProfileSection
