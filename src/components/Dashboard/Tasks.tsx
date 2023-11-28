import styled from 'styled-components'
import useTasks from '../../hooks/Dashboard/useTasks'
import { type TaskList } from '../../types'
import Spinner from '../Common/Spinner'
import TaskCard from './TaskCard'

const Tasks: React.FC = () => {
  const { tasks, loading, error } = useTasks()

  if (loading) {
    return (
      <SmallContainer>
      <Spinner>
        <Title>Loading tasks</Title>
      </Spinner>
      </SmallContainer>
    )
  }

  if (error != null) {
    return (
      <SmallContainer>
        <Title>An error occured {error.message}</Title>
      </SmallContainer>
    )
  }

  if (tasks?.length === 0) {
    return (
      <SmallContainer>
       <Title>No Tasks found</Title>
      </SmallContainer>
    )
  }

  return (
    <Container>
      {tasks.map((typeTask: TaskList) => (
        <TaskColumn key={typeTask.title}>
          <Title>{`${typeTask.title} (${typeTask.values.length})`}</Title>
          {
            typeTask.values.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          }
        </TaskColumn>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  align-items: flex-start;
  margin: 10px 10px 10px 0px;
  overflow-y: auto;
  height: 75vh;
  overflow-x: auto;
  width: calc(100vw - 84px);
  @media only screen and (max-width: 850px) {
    margin-bottom: 100px;
  }
  @media only screen and (min-width: 850px) {
    width: calc(100vw - 348px);

  }
  ::-webkit-scrollbar {
    height: 0px;
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.backgroundDark};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.neutral};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-corner{
    display: none;
  }
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

const TaskColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 348px;
`

const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.white};
`

export default Tasks
