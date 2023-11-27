import { gql } from '@apollo/client'

export const UPDATE_TASK = gql`
  mutation updateTask(
    $assigneeId: String
    $dueDate: DateTime!
    $id: String!
    $name: String!
    $pointEstimate: PointEstimate!
    $status: Status!
    $tags: [TaskTag!]!
  ) {
    updateTask(
      input: {
        assigneeId: $assigneeId
        dueDate: $dueDate
        id: $id
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
