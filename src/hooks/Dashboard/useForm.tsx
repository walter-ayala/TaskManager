import { useMutation, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { CREATE_TASK } from '../../api/Dashboard/mutation/createTask'
import { GET_TASKS } from '../../api/Dashboard/query/getTasks'
import { GET_USERS } from '../../api/Dashboard/query/getUsers'
import { type User } from '../../types'

const initialValues = {
  assigneeId: '',
  dueDate: new Date(),
  name: '',
  pointEstimate: '',
  status: '',
  tags: []
}

const useForm = (toggleModal: () => void) => {
  const [form, setForm] = useState(initialValues)
  const [users, setUsers] = useState<User[]>()
  const [formValid, setFormValid] = useState(true)

  const { loading, data } = useQuery(GET_USERS)

  const [addTodo, { loading: loadingCreateTask, error: errorCreateTask }] = useMutation(CREATE_TASK, {
    variables: form,
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

    await addTodo()
  }

  return {
    form,
    users,
    loading,
    onChangeForm,
    createTask,
    formValid,
    loadingCreateTask,
    errorCreateTask
  }
}

export default useForm
