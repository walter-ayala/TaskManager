import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query GetTasks {
    tasks(input: {}) {
      id
      assignee {
        id
        avatar
        fullName
      }
      createdAt
      dueDate
      name
      pointEstimate
      position
      status
      tags
    }
  }
`
