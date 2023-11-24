import styled from 'styled-components'
import { dataTasks } from '../../dummyData'
import TaskCard from './TaskCard'

const Tasks: React.FC = () => {
  return (
    <Container>
      {dataTasks.map((typeTask) => (
        <TaskList key={typeTask.name}>
          <TitleTask>{`${typeTask.name} (${typeTask.values.length})`}</TitleTask>
          {
            typeTask.values.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))
          }
        </TaskList>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  align-items: flex-start;
  margin: 10px;
  overflow-y: auto;
  height: 75vh;
  overflow-x: auto;
  width: calc(100vw - 84px);
  @media only screen and (min-width: 769px) {
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

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 348px;
`

const TitleTask = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.white};
`

export default Tasks
