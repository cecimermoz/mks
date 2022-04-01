import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { CustomChartContainer } from './CustomChart.style'

const CustomChart = () => {
  const options = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'My chart',
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  }
  return (
    <CustomChartContainer>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </CustomChartContainer>
  )
}
export default CustomChart
