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
  maxWidth: 'calc(1440px - 4rem)',
  margin: '2rem',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '1.5rem',
  p: 4,
}

const Modalcontainer = () => {
  const {
    rrss,
    isModalOpen,
    modalData,
    handleCloseModal,
    getSocialMediaData,
    formattedFollowerNumber,
    textByMedia,
  } = useContext(DashboardContext)
  const iconMediaData = getSocialMediaData(modalData.icon)
  const isYoutube = modalData.icon === rrss[3]
  const text = (data) => (data < 0 ? 'Less' : 'New')

  console.log('modalData', modalData)
  console.log('iconMediaData', iconMediaData)

  return ReactDOM.createPortal(
    <ModalcontainerStyled isModalOpen={isModalOpen}>
      <Box sx={style} onClick={() => handleCloseModal()}>
        <Typography
          aria-label={`${iconMediaData.name} followers`}
          variant="h2"
          component="h2"
        >
          {isYoutube
            ? `${iconMediaData.name} suscribers`
            : `${iconMediaData.name} followers`}
        </Typography>
        <Typography
          aria-label={`${iconMediaData.user_name} contact`}
          variant="h5"
          component="span"
        >
          {iconMediaData.component} {`${modalData.user_name}`}
        </Typography>
        {/*Followers in total */}
        <div aria-label={`${modalData.followers_totalNumber} total followers`}>
          <Typography variant="h5" component="span">
            {modalData.followers_totalNumber}
          </Typography>
          <Typography component="span">Total followers</Typography>
        </div>
        {/*Followers in the last 10 days */}
        <div
          aria-label={`${formattedFollowerNumber(
            modalData.followers_lastDays
          )} ${text(modalData.followers_lastDays)} ${textByMedia(
            isYoutube,
            'suscribers',
            'followers'
          )} in the last 10 days`}
        >
          <Typography variant="h5" component="span">
            {formattedFollowerNumber(modalData.followers_lastDays)}
          </Typography>
          <Typography component="span">
            {`New ${textByMedia(
              isYoutube,
              'suscribers',
              'followers'
            )} in the past 10 days`}
          </Typography>
        </div>
        {/*Followers per day */}
        <div
          aria-label={`${formattedFollowerNumber(
            modalData.followers_perDay
          )} ${text(modalData.followers_perDay)} ${textByMedia(
            isYoutube,
            'suscribers',
            'followers'
          )} per day`}
        >
          <Typography variant="h5" component="span">
            {formattedFollowerNumber(modalData.followers_perDay)}
          </Typography>
          <Typography component="span">
            {`${text(modalData.followers_perDay)} ${textByMedia(
              isYoutube,
              'suscribers',
              'followers'
            )} in the past 10 days`}
          </Typography>
        </div>

        <CustomChart />
      </Box>
    </ModalcontainerStyled>,
    document.getElementById('modal-root')
  )
}

Modalcontainer.propTypes = {}

export default Modalcontainer
