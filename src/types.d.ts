export interface OptionSelected {
  selected: boolean
}

export interface Tags {
  isfirst: boolean
  name: string
}

export interface ButtonComponent {
  onClick: () => void
  children: JSX.Element
  main?: boolean
}

export interface TopOptions {
  openModal: () => void
}

export interface Modals {
  isOpen: boolean
  toggleModal: () => void
  children: JSX.Element
}

export interface Form {
  assigneeId: string
  dueDate: Date
  name: string
  pointEstimate: string
  status: string
  tags: string[]
}

export interface Options {
  id: string
  label?: string
  avatar?: string
}

export interface MenuForm {
  icon: JSX.Element
  title: string
  titleModal: string
  options: Options[]
  loading?: boolean
  onChange: (value: string) => void
  multipleSelect?: boolean
  valueSelected: string | string[]
}

export interface TimerStyles {
  $bgcolor: string
  $textcolor: string
}

export interface WeightText {
  $normalweight?: boolean
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

export interface TaskList {
  title: string
  values: Task[]
}
