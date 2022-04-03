import { lightTheme, darkTheme, generals } from '../../theme/generalTheme'

const chartOptions = (chartData, isYoutube, darkMode) => ({
  plotOptions: {
    series: {
      color: generals.purple,
    },
  },
  chart: {
    type: 'spline',
    backgroundColor: darkMode ? darkTheme.background : lightTheme.background,
    margin: [60, 40, 50, 65],
  },
  tooltip: {
    split: true,
    formatter: function () {
      return `<b> ${this.y} </b> ${this.y < 0 ? 'less' : 'new'} ${
        isYoutube ? 'suscribers' : 'followers'
      }`
    },
    pointFormat: `<b>{point.x}</b> new ${
      isYoutube ? 'suscribers' : 'followers'
    }`,
    shape: 'square',
    backgroundColor: darkMode ? darkTheme.background : lightTheme.background,
    borderColor: darkMode ? darkTheme.secondaryText : lightTheme.primaryHover,
    shadow: false,
    style: {
      opacity: 1,
      color: generals.purpleAlpha85,
    },
  },
  yAxis: {
    title: {
      enabled: false,
    },
    gridLineColor: darkMode
      ? 'hsla(0, 0%, 100%,0.2)'
      : 'hsla(230, 17%, 14%, 0.2)',
    gridLineDashStyle: 'Dash',
    startOnTick: true,
    tickWidth: 0,
    showFirstLabel: true,
  },
  xAxis: {
    showFirstLabel: false,
    startOnTick: true,
    endOnTick: true,
    gridLineColor: darkMode
      ? 'hsla(0, 0%, 100%,0.2)'
      : 'hsla(230, 17%, 14%, 0.2)',
    gridLineWidth: 1,
    gridLineDashStyle: 'Dash',
    labels: {
      //distance: '75%',
      y: 25,
    },
    tickWidth: 0,
    maxPadding: 0,
    minPadding: 0,
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  title: {
    text: 'May 4 - May 13',
    align: 'left',
    style: {
      color: darkMode ? darkTheme.primaryText : lightTheme.primaryText,
      opacity: 0.65,
    },
    x: 20,
    y: 10,
  },
  series: [
    {
      data: chartData,
    },
  ],
})

export default chartOptions
