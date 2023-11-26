import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_TASKS } from '../../api/Dashboard/query/getTasks'
import { type Task, type TaskList } from '../../types'

type Status = Task['status']

const useTasks = () => {
  const [tasks, setTasks] = useState<TaskList[]>([])

  const { loading, error, data } = useQuery(GET_TASKS)

  const groupTaskByStatus = (taskArray: Task[]) => {
    return taskArray.reduce<Record<Status, Task[]>>((orderTasks, currentItem) => {
      orderTasks[currentItem.status] = [...(orderTasks[currentItem.status] || []), currentItem]
      return orderTasks
    }, {})
  }

  const taskClassification = () => {
    const tasksSorted = groupTaskByStatus(data.tasks)
    const groupedTask = Object.keys(tasksSorted).map((key) => {
      return { title: key, values: (tasksSorted)[key] }
    })
    setTasks(groupedTask)
  }

  useEffect(() => {
    if (data?.tasks.length > 0) taskClassification()
  }, [data])

  return { tasks, loading, error }
}

export default useTasks
