import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { CustomChartContainer } from './CustomChart.style'

const CustomChart = ({ chartData }) => {
  const options = {
    chart: {
      type: 'spline',
      backgroundColor: 'hsl(230, 17%, 14%)',
      margin: [60, 50, 50, 60],
      reflow: false,
    },
    title: {
      text: 'May 4 - May 13',
      align: 'left',
      style: {
        //color: 'white',
      },
      x: 20,
      y: 10,
    },
    series: [
      {
        data: chartData,
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
