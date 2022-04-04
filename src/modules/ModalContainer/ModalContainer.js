import React from 'react'
import ReactDOM from 'react-dom'
import { CustomChart, FollowersIndicator } from '../../components'
import PropTypes from 'prop-types'
import {
  ModalBackground,
  ModalChart,
  ModalStyled,
  ModalTextContainer,
  ModalTextStyled,
  ModalTitle,
} from './ModalContainer.style'

const Modalcontainer = (props) => {
  const {
    isModalOpen,
    modalData,
    handleCloseModal,
    getSocialMediaData,
    formattedFollowerNumber,
    textByMedia,
    isYoutube,
  } = props

  const iconMediaData = modalData.icon
    ? getSocialMediaData(modalData.icon)
    : getSocialMediaData(modalData.rrss_type)

  const textByData = (data) => (data < 0 ? 'Less' : 'New')

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
          <ModalTextContainer>
            {/*Followers in total */}
            <ModalTextStyled>
              <span datatype="number">
                {formattedFollowerNumber(modalData.followers_totalNumber)}
              </span>
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
                {`${textByData(modalData.followers_perDay)} ${textByMedia(
                  isYoutube,
                  'suscribers',
                  'followers'
                )}`}
                <br />
                TODAY
              </span>
            </ModalTextStyled>
          </ModalTextContainer>
        </ModalTitle>
        <ModalChart>
          <CustomChart chartData={modalData.chart_data} isYoutube={isYoutube} />
        </ModalChart>
      </ModalStyled>
    </>,
    document.getElementById('modal-root')
  )
}

Modalcontainer.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  getSocialMediaData: PropTypes.func.isRequired,
  formattedFollowerNumber: PropTypes.func.isRequired,
  textByMedia: PropTypes.func.isRequired,
  isYoutube: PropTypes.bool,
  modalData: PropTypes.shape({
    chart_data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    followers_lastDays: PropTypes.number,
    followers_perDay: PropTypes.number,
    followers_totalNumber: PropTypes.number,
    icon: PropTypes.string,
    user_name: PropTypes.string,
  }).isRequired,
}

Modalcontainer.defaultProps = {
  isYoutube: false,
}

export default Modalcontainer
