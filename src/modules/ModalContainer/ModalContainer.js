import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import CustomChart from '../../components/CustomChart'

import { DashboardContext } from '../../context/dashContext'
import { ModalcontainerStyled } from './ModalContainer.style'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const Modalcontainer = () => {
  const { isModalOpen, handleCloseModal } = useContext(DashboardContext)

  return ReactDOM.createPortal(
    <ModalcontainerStyled isModalOpen={isModalOpen}>
      <Box sx={style} onClick={() => handleCloseModal()}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <CustomChart />
      </Box>
    </ModalcontainerStyled>,
    document.getElementById('modal-root')
  )
}

Modalcontainer.propTypes = {}

export default Modalcontainer
