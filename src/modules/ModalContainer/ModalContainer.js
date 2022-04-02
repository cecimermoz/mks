import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import CustomChart from '../../components/CustomChart'
import FollowersIndicator from '../../components/FollowersIndicator'
import { DashboardContext } from '../../context/dashContext'
import {
  ModalBackground,
  ModalChart,
  ModalStyled,
  ModalTextStyled,
  ModalTitle,
} from './ModalContainer.style'

const Modalcontainer = () => {
  const {
    isModalOpen,
    modalData,
    handleCloseModal,
    getSocialMediaData,
    formattedFollowerNumber,
    textByMedia,
    checkIfIsYoutube,
  } = useContext(DashboardContext)
  const iconMediaData = modalData.icon
    ? getSocialMediaData(modalData.icon)
    : getSocialMediaData(modalData.rrss_type)
  const isYoutube = checkIfIsYoutube(modalData.icon)
  const text = (data) => (data < 0 ? 'Less' : 'New')

  return ReactDOM.createPortal(
    <>
      <ModalBackground
        isModalOpen={isModalOpen}
        onClick={() => handleCloseModal()}
      />
      <ModalStyled>
        <ModalTitle>
          <h2>
            {isYoutube
              ? `${iconMediaData.name} suscribers`
              : `${iconMediaData.name} followers`}
          </h2>
          <span
            aria-label="Close modal"
            datatype="close-modal"
            onClick={() => handleCloseModal()}
          >
            &times;
          </span>
          {iconMediaData.component}
          <span datatype="user-name">{`${modalData.user_name}`}</span>
          <ModalTextStyled>
            {/*Followers in total */}
            <ModalTextStyled>
              <span datatype="number">{modalData.followers_totalNumber}</span>
              <span datatype="text">
                Total
                <br />
                followers
              </span>
            </ModalTextStyled>
            {/*Followers in the last 10 days */}
            <ModalTextStyled>
              <FollowersIndicator
                isNegative={modalData.followers_lastDays < 0}
                followers={modalData.followers_lastDays}
                isYoutube={isYoutube}
                isToday={false}
                datatype="number"
              />
              <span datatype="text">
                {`New ${textByMedia(isYoutube, 'suscribers', 'followers')}`}
                <br />
                in the past 10 days
              </span>
            </ModalTextStyled>
            {/*Followers per day */}
            <ModalTextStyled>
              <FollowersIndicator
                isNegative={modalData.followers_perDay < 0}
                followers={formattedFollowerNumber(modalData.followers_perDay)}
                isYoutube={isYoutube}
                isToday={false}
                datatype="number"
              />
              <span datatype="text">
                {`${text(modalData.followers_perDay)} ${textByMedia(
                  isYoutube,
                  'suscribers',
                  'followers'
                )}`}
                <br />
                TODAY
              </span>
            </ModalTextStyled>
          </ModalTextStyled>
        </ModalTitle>
        <ModalChart>
          <CustomChart chartData={modalData.chart_data} isYoutube={isYoutube} />
        </ModalChart>
      </ModalStyled>
    </>,
    document.getElementById('modal-root')
  )
}

Modalcontainer.propTypes = {}

export default Modalcontainer
