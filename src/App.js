import { ThemeProvider } from '@emotion/react'
import { Context } from './context/dashContext'
import DashboardContainer from './modules/DashboardContainer'
import generalTheme from './theme/generalTheme'

const App = () => {
  return (
    <Context>
      <ThemeProvider theme={generalTheme}>
        <DashboardContainer />
      </ThemeProvider>
    </Context>
  )
}

export default App
