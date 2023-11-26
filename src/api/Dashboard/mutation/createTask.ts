import { gql } from '@apollo/client'

export const CREATE_TASK = gql`
  mutation createTask(
    $assigneeId: String
    $dueDate: DateTime!
    $name: String!
    $pointEstimate: PointEstimate!
    $status: Status!
    $tags: [TaskTag!]!
  ) {
    createTask(
      input: {
        assigneeId: $assigneeId
        dueDate: $dueDate
        name: $name
        pointEstimate: $pointEstimate
        status: $status
        tags: $tags
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
