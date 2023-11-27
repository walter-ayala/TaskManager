import styled from 'styled-components'
import AssigneeIcon from '../../assets/icons/AssigneeIcon'
import DueDateIcon from '../../assets/icons/DueDateIcon'
import EstimateIcon from '../../assets/icons/EstimateIcon'
import LabelIcon from '../../assets/icons/LabelIcon'
import TaskIcon from '../../assets/icons/TaskIcon'
import { estimateList, labelList, pointEstimate, statusLabel, statusList } from '../../constants'
import OptionForm from './OptionForm'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { DateTime } from 'luxon'
import useForm from '../../hooks/Dashboard/useForm'
import { type Modals } from '../../types'
import CustomButton from '../Common/CustomButton'
import './datepicker.css'

const TaskForm: React.FC<Partial<Modals>> = ({ toggleModal = () => { }, task = null }) => {
  const {
    form,
    users,
    loading,
    onChangeForm,
    createTask,
    formValid,
    loadingMutation,
    errorMutation
  } = useForm(toggleModal, task)

  return (
    <Container>
      <Input
        placeholder="Task Title"
        name="name"
        value={form.name}
        onChange={(e: { target: { value: string | Date | string[] } }) => { onChangeForm('name', e.target.value) }}
      />
      <OptionsContainer>
        <OptionForm
          icon={<EstimateIcon />}
          title={'Estimate'}
          titleModal='Estimate'
          options={estimateList}
          onChange={(value: string) => { onChangeForm('pointEstimate', value) }}
          valueSelected={form.pointEstimate}
          {...{ valueToShow: pointEstimate[task?.pointEstimate as keyof typeof pointEstimate] }}
        />
        <OptionForm
          icon={<AssigneeIcon />}
          title={'Asignee'}
          titleModal={'Assign To...'}
          options={users ?? []}
          loading={loading}
          onChange={(value: string) => { onChangeForm('assigneeId', value) }}
          valueSelected={form.assigneeId}
          {...{ valueToShow: task?.assignee.fullName }}
        />
        <OptionForm
          icon={<LabelIcon />}
          title={'Label'}
          titleModal={'Tag Title'}
          options={labelList}
          onChange={(value: string) => {
            const isExists = form.tags.some((tag) => tag === value)
            if (isExists) {
              const tagsFiltered = form.tags.filter((tag) => tag !== value)
              onChangeForm('tags', tagsFiltered)
              return
            }
            onChangeForm('tags', [...form.tags, value])
          }}
          valueSelected={form.tags}
          multipleSelect
        />
        <OptionForm
          icon={<TaskIcon />}
          title={'Status'}
          titleModal={'Status'}
          options={statusList}
          onChange={(value: string) => { onChangeForm('status', value) }}
          valueSelected={form.status}
          {...{ valueToShow: statusLabel[task?.status as keyof typeof statusLabel] }}
        />
        <ContainerCalendar>
          <DatePicker
            selected={form.dueDate}
            onChange={(value) => { onChangeForm('dueDate', value ?? new Date()) }}
            customInput={
              <DueDateButton>
                <DueDateIcon />
                <DueDateText>
                  {DateTime.fromJSDate(form.dueDate).toFormat('dd LLL, yyyy')}
                </DueDateText>
              </DueDateButton>
            }
          />
        </ContainerCalendar>
      </OptionsContainer>
      <div>
        {loadingMutation && (
            <TextComponent>Loading, please wait...</TextComponent>
        )}
        {(errorMutation != null) && (
            <TextComponent>An error occured, {errorMutation.message}, try again</TextComponent>
        )}
        {!formValid && (
            <TextComponent>Please complete all the information</TextComponent>
        )}
      </div>
      <ButtonsContainer>
        <CustomButton onClick={toggleModal}>
          <TextComponent>Cancel</TextComponent>
        </CustomButton>
        <CustomButton main onClick={createTask}>
          <TextComponent>{task ? 'Update' : 'Create'}</TextComponent>
        </CustomButton>
      </ButtonsContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 16px;
  gap: 15px;
`
const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  line-height: 32px;
  letter-spacing: 0.75px;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.neutral};
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.neutral};
  }
`

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  max-width: auto;
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`

const DueDateButton = styled.button`
  display: flex;
  flex-direction: row;
  background: rgba(148, 151, 154, 0.1);
  border-radius: 4px;
  padding: 0px 16px;
  column-gap: 8px;
  align-items: center;
  position: relative;
  width: 170px;
  border: none;
  cursor: pointer;
  height: 44px;
`

const DueDateText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.white};
`

const ContainerCalendar = styled.div`
  margin: 0;
`

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`

const TextComponent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.white};
  margin: 0;
`

export default TaskForm

