import { ThemeProvider } from '@emotion/react'
import DashboardContainer from './modules/DashboardContainer'
import generalTheme from './theme/generalTheme'

const App = () => {
  return (
    <ThemeProvider theme={generalTheme}>
      <DashboardContainer />
    </ThemeProvider>
  )
}

export default App
