import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

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
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
export default CustomChart
