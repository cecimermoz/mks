import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { SwitchStyled, Slider, InputCheck, LabelText } from './Switch.style'
import { DashboardContext } from '../../context/dashContext'

const Switch = ({ labelText, state, set }) => {
  return (
    <>
      {labelText && <LabelText htmlFor="">{labelText} </LabelText>}
      <SwitchStyled>
        <InputCheck
          type="checkbox"
          checked={state}
          onChange={() => set(!state)}
        />
        <Slider />
      </SwitchStyled>
    </>
  )
}

Switch.propTypes = {
  labelText: PropTypes.string,
  set: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
}

Switch.defaultProptypes = {
  labelText: '',
}

export default Switch
