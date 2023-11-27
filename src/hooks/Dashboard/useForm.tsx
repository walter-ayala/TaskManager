/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useMutation, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { CREATE_TASK } from '../../api/Dashboard/mutation/createTask'
import { UPDATE_TASK } from '../../api/Dashboard/mutation/updateTask'
import { GET_TASKS } from '../../api/Dashboard/query/getTasks'
import { GET_USERS } from '../../api/Dashboard/query/getUsers'
import { type IForm, type Task, type User } from '../../types'

const initialValues = {
  assigneeId: '',
  dueDate: new Date(),
  name: '',
  pointEstimate: '',
  status: '',
  tags: []
}

const useForm = (toggleModal: () => void, task: Task | null) => {
  const [form, setForm] = useState<IForm>(initialValues)
  const [users, setUsers] = useState<User[]>()
  const [formValid, setFormValid] = useState(true)

  const { loading, data } = useQuery(GET_USERS)

  const [addTask, { loading: loadingCreateTask, error: errorCreateTask }] = useMutation(CREATE_TASK, {
    variables: form,
    onCompleted () {
      toggleModal()
    },
    refetchQueries: [{ query: GET_TASKS }, 'GetTasks']
  })

  const [updateTask, { loading: loadingUpdateTask, error: errorUpdateTask }] = useMutation(UPDATE_TASK, {
    variables: { ...form, id: task?.id },
    onCompleted () {
      toggleModal()
    },
    refetchQueries: [{ query: GET_TASKS }, 'GetTasks']
  })

  useEffect(() => {
    if (data?.users.length > 0) {
      const usersList = data.users.map((user: User) => {
        return {
          ...user,
          label: user.fullName
        }
      })
      setUsers(usersList)
    }
  }, [data])

  const onChangeForm = (field: string, value: string | string[] | Date) => { setForm(oldForm => ({ ...oldForm, [field]: value })) }

  const validateValues = () => {
    let isValid = true
    if (
      form.assigneeId === '' ||
      form.name === '' ||
      form.pointEstimate === '' ||
      form.status === '' ||
      form.tags.length === 0) isValid = false
    setFormValid(isValid)
    return isValid
  }

  const createTask = async () => {
    if (!validateValues()) return
    if (task) return await updateTask()
    await addTask()
  }

  useEffect(() => {
    if (task) {
      console.log(task)
      setForm({
        assigneeId: task.assignee.id,
        dueDate: new Date(task.dueDate),
        name: task.name,
        pointEstimate: task.pointEstimate,
        status: task.status,
        tags: task.tags
      })
    }
  }, [task])

  return {
    form,
    users,
    loading,
    onChangeForm,
    createTask,
    formValid,
    loadingMutation: loadingCreateTask || loadingUpdateTask,
    errorMutation: errorCreateTask || errorUpdateTask
  }
}

export default useForm
