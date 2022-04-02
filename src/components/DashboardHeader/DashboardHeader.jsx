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

const DashboardHeader = () => {
  const { darkMode, setDarkMode } = useContext(DashboardContext)

  return (
    <DashboardHeaderStyled>
      <HeaderText>
        <H1Styled>Social Media Dashboard</H1Styled>
        <SubTextStyled>Total Followers: 23,004</SubTextStyled>
      </HeaderText>
      <ModeSwitch>
        <Switch labelText="Dark Mode" set={setDarkMode} state={darkMode} />
      </ModeSwitch>
    </DashboardHeaderStyled>
  )
}

DashboardHeader.propTypes = {}

export default DashboardHeader
