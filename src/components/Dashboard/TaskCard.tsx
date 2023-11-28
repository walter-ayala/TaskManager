import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import BranchIcon from '../../assets/icons/BranchIcon'
import Clock from '../../assets/icons/Clock'
import CommentIcon from '../../assets/icons/CommentIcon'
import PaperClipIcon from '../../assets/icons/PaperClipIcon'
import { type TimerStyles, type Task, type WeightText } from '../../types'
import compareDates from '../../utils/compareDates'
import OptionsMenu from './OptionsMenu'
import Tag from './Tag'
import ProfileAvatar from '../../assets/images/ProfileAvatar.png'
import { pointEstimate } from '../../constants'

interface Props {
  task: Task
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const [dueDateInformation, setDueDateInformation] = useState({ backgroundColor: '', textColor: '', dueDateText: DateTime.fromISO(task.dueDate).toFormat('dd LLL, yyyy') })

  useEffect(() => {
    const timerProps = compareDates(DateTime.fromISO(task.dueDate).toFormat('dd LLL, yyyy'))
    setDueDateInformation(timerProps)
  }, [task.dueDate])

  return (
    <Container>
      <RowContainer>
        <TitleTask>{task.name}</TitleTask>
        <OptionsMenu task={task}/>
      </RowContainer>
      <RowContainer>
        <InformationTask>{pointEstimate[task.pointEstimate as keyof typeof pointEstimate]}</InformationTask>
        {dueDateInformation.backgroundColor.length > 1 &&
          <Timer $bgcolor={dueDateInformation.backgroundColor} $textcolor={dueDateInformation.textColor}>
            <Clock />
            <InformationTask>
              {dueDateInformation.dueDateText}
            </InformationTask>
          </Timer>
        }
      </RowContainer>
      <TagsContainer>
        {
          task.tags.map((tag: string, index: number) => (
            <Tag key={index} name={tag} isfirst={index === 0} />
          ))
        }
      </TagsContainer>
      <RowContainer>
        <img src={task.assignee.avatar ?? ProfileAvatar} alt="profileAvatar" width={32} height={32} style={{ borderRadius: '50%' }} />
        <IconsSection>
          <PaperClipIcon />
          <InformationTask $normalweight>
            5
          </InformationTask>
          <BranchIcon />
          <InformationTask $normalweight>
            3
          </InformationTask>
          <CommentIcon />
        </IconsSection>
      </RowContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px;
  background-color: ${(props) => props.theme.backgroundLight};
  box-sizing: border-box;
  row-gap: 10px;
`

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
`

const IconsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const TitleTask = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.white};
  margin: 0px;
`

const InformationTask = styled.div<WeightText>`
  color: white;
  font-weight: ${(props) => ((props.$normalweight ?? false) ? 400 : 600)};
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.75px;
  margin-left: 5px;
`

const Timer = styled.div<TimerStyles>`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  padding: 4px 16px 4px 16px;
  gap: 8px;
  background-color: ${(props) => props.$bgcolor};
  & > *,
  & {
    color: ${(props) => props.$textcolor};
    fill: ${(props) => props.$textcolor};
    text-transform: uppercase;
  }
`

export default TaskCard
