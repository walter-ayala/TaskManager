import styled from 'styled-components'
import { type Modals } from '../../types'
import Modal from 'react-modal'
import './animatedCustomModal.css'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    borderWidth: '0px',
    overflow: 'visible'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
}

Modal.setAppElement('#root')

const CustomModal: React.FC<Modals> = ({ isOpen, toggleModal, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={modalStyles}
      onRequestClose={toggleModal}
      closeTimeoutMS={1000}
    >
      <StyledModal>
        {children}
      </StyledModal>
    </Modal>
  )
}

const StyledModal = styled.div`
  display: flex;
  width: auto;
  max-width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border-width: 0px;
  background-color: ${(props) => props.theme.backgroundModal};
`

export default CustomModal
