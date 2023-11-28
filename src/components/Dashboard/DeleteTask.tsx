import styled from 'styled-components'
import { type DeleteModal } from '../../types'
import CustomButton from '../Common/CustomButton'

const DeleteTask: React.FC<DeleteModal> = ({ toggleModal = () => { }, onDeleteTask = () => { }, loadingDeleteTask, errorDeleteTask }) => {
  return (
    <Container>
      <HeaderContainer>
        <Title>Delete Task</Title>
        <Message>Are you sure you want to delete this Task?</Message>
      </HeaderContainer>
      <div>
        <ButtonsContainer>
          <CustomButton isDisabled={loadingDeleteTask} onClick={toggleModal}>
            <Message>Cancel</Message>
          </CustomButton>
          <CustomButton isDisabled={loadingDeleteTask} main onClick={onDeleteTask}>
            <Message>Delete</Message>
          </CustomButton>
        </ButtonsContainer>
        <StatusContainer>
          {loadingDeleteTask && (
            <Message>Loading, please wait...</Message>
          )}
          {(errorDeleteTask !== undefined) && (
            <Message>An error occured, {errorDeleteTask.message}, try again</Message>
          )}
        </StatusContainer>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 15px;
  justify-content: center;
  align-items: center;
  width: 350px;
`

const Message = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.white};
  margin: 0px;
  font-family: sans-serif;
`

const Title = styled.h3`
  font-size: 19px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.white};
  margin: 0px;
  font-family: sans-serif;
`

const HeaderContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.white};
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 6px 16px;
  width: 100%;
  margin: 0px;
  margin-bottom: 10px;
`

const StatusContainer = styled.div`
  display: flex;
  padding: 16px;
`
export default DeleteTask
