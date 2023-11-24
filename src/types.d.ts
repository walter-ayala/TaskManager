export interface TabSidebar {
  selected: boolean
}

export interface Tags {
  first: boolean
  name: string
}

export interface WeightText {
  normalWeight?: boolean
}

export interface User {
  avatar?: string
  createdAt?: string
  email?: string
  fullName: string
  id: string
  type?: string
  updatedAt?: string
  label?: string
}

export interface Task {
  assignee: User
  createdAt: string
  creator?: User
  dueDate: string
  id: string
  name: string
  pointEstimate: string
  position: number
  status: string
  tags: string[]
}
