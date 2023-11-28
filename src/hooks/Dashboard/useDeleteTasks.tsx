import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_TASKS } from '../../api/Dashboard/query/getTasks'
import { DELETE_TASK } from '../../api/Dashboard/mutation/deleteTask'
import { type Task, type TaskResponse } from '../../types'
import toast from 'react-hot-toast'

const useDeleteTasks = (idTask: string) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [deleteTask, { loading: loadingDeleteTask, error: errorDeleteTask }] = useMutation(DELETE_TASK)

  const toggleModal = () => {
    setIsOpenModal((prevState) => !prevState)
  }

  const onHandleOptimisticDelete = async () => {
    try {
      const optimisticResponse = {
        __typename: 'Mutation',
        deleteItem: {
          __typename: 'Task',
          id: idTask
        }
      }

      await deleteTask({
        variables: {
          id: idTask
        },
        optimisticResponse,
        update: (cache) => {
          const existingItems: TaskResponse = cache.readQuery({ query: GET_TASKS }) ?? { tasks: [] }
          cache.writeQuery({
            query: GET_TASKS,
            data: {
              tasks: existingItems ? existingItems.tasks.filter((item: Task) => item.id !== idTask) : []
            }
          })
        },
        onCompleted () {
          toast.success('Task successfully removed')
        }
      })
    } catch (error) {
      toast.error('Error deleting task. Try again')
    }
  }

  const onDeleteTask = async () => {
    toggleModal()
    setTimeout(onHandleOptimisticDelete, 500)
  }

  return { isOpenModal, toggleModal, loadingDeleteTask, onDeleteTask, errorDeleteTask }
}

export default useDeleteTasks
