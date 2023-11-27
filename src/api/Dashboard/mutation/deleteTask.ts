import { gql } from '@apollo/client'

export const DELETE_TASK = gql`
  mutation deleteTask(
    $id: String!
  ) {
    deleteTask(
      input: {
        id: $id
      }
    ) {
      assignee {
        id
        fullName
        avatar
      }
      createdAt
      dueDate
      id
      name
      pointEstimate
      status
      tags
    }
  }
`
