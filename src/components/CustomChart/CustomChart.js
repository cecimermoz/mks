import React, { useContext } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { CustomChartContainer } from './CustomChart.style'
import { DashboardContext } from '../../context/dashContext'
import chartOptions from './chartOptions'
import PropTypes from 'prop-types'

const CustomChart = (props) => {
  const { chartData, isYoutube } = props
  const { darkMode } = useContext(DashboardContext)

  return (
    <CustomChartContainer>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions(chartData, isYoutube, darkMode)}
      />
    </CustomChartContainer>
  )
}

CustomChart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  isYoutube: PropTypes.bool,
}

CustomChart.defaultProps = {
  isYoutube: false,
}
export default CustomChart
