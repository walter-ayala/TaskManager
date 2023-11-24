import styled from 'styled-components'
import ProfileAvatar from '../../assets/images/ProfileAvatar.png'
import SearchIcon from '../../assets/icons/SearchIcon'
import NotificationIcon from '../../assets/icons/NotificationIcon'

const SearchBar: React.FC = () => {
  return (
    <SearchBarContainer>
      <InputContainer>
        <SearchIcon />
        <SearchInput />
      </InputContainer>
      <RightContainer>
        <NotificationIcon />
        <img src={ProfileAvatar} alt="profileAvatar" />
      </RightContainer>
    </SearchBarContainer>
  )
}

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  height: 64px;
  padding-left: 26px;
  padding-right: 26px;
  background-color: ${(props) => props.theme.backgroundLight};
  fill: ${(props) => props.theme.neutral};
`

const InputContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  @media only screen and (min-width: 500px) {
    width: 75%;
    gap: 26px;
  }
`

const RightContainer = styled(InputContainer)`
  justify-content: flex-end;
  img {
    width: 32px;
    height: 32px;
  };
  @media only screen and (min-width: 500px) {
    width: 25%;
    img {
      width: 40px;
      height: 40px;
    };
  }
`

const SearchInput = styled.input.attrs({ placeholder: 'Search' })`
  background-color: transparent;
  border: none;
  width: 100%;
  :focus {
    outline: none;
  }
  color: ${(props) => props.theme.neutral};
`

export default SearchBar
