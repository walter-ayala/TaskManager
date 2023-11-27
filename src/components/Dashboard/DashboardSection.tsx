import { useState } from 'react'
import CustomModal from '../Common/CustomModal'
import TopBar from '../Common/TopBar'
import TaskForm from './TaskForm'
import Tasks from './Tasks'

const DashboardSection: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const toggleModal = () => {
    setIsOpenModal((prevState) => !prevState)
  }

  return (
    <div>
      <TopBar openModal={toggleModal} />
      <Tasks />
      <CustomModal isOpen={isOpenModal} toggleModal={toggleModal}>
        <TaskForm toggleModal={toggleModal}/>
      </CustomModal>
    </div>
  )
}

export default DashboardSection
