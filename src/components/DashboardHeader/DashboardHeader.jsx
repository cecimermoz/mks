import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  DashboardHeaderStyled,
  H1Styled,
  HeaderText,
  ModeSwitch,
  SubTextStyled,
} from './DashboardHeader.style'
import { DashboardContext } from '../../context/dashContext'
import Switch from '../Switch'

const DashboardHeader = (props) => {
  const { darkMode, setDarkMode } = useContext(DashboardContext)
  const { totalFollowers } = props
  return (
    <DashboardHeaderStyled>
      <HeaderText>
        <H1Styled>Social Media Dashboard</H1Styled>
        <SubTextStyled>Total Followers: {totalFollowers}</SubTextStyled>
      </HeaderText>
      <ModeSwitch>
        <Switch labelText="Dark Mode" set={setDarkMode} state={darkMode} />
      </ModeSwitch>
    </DashboardHeaderStyled>
  )
}

DashboardHeader.propTypes = {
  totalFollowers: PropTypes.number.isRequired,
}

export default DashboardHeader
