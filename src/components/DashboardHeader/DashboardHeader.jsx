import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import {
  DashboardHeaderStyled,
  H1Styled,
  HeaderText,
  ModeSwitch,
  SubTextStyled,
} from './DashboardHeader.style'

const DashboardHeader = () => {
  return (
    <DashboardHeaderStyled>
      <HeaderText>
        <H1Styled>Social Media Dashboard</H1Styled>
        <SubTextStyled>Total Followers: 23,004</SubTextStyled>
      </HeaderText>
      <ModeSwitch>
        <FormGroup>
          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Dark Mode"
            labelPlacement="start"
            /* TODO: Estilado */
            sx={{ fontWeight: '700' }}
          />
        </FormGroup>
      </ModeSwitch>
    </DashboardHeaderStyled>
  )
}

DashboardHeader.propTypes = {}

export default DashboardHeader