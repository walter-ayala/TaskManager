import { useState } from 'react'
import CustomModal from '../Common/CustomModal'
import TopBar from '../Common/TopBar'
import FormAddTask from './FormAddTask'
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
        <FormAddTask toggleModal={toggleModal}/>
      </CustomModal>
    </div>
  )
}

export default DashboardSection
