import { ThemeProvider } from '@emotion/react'
import { useContext } from 'react'
import { Context, DashboardContext } from './context/dashContext'
import DashboardContainer from './modules/DashboardContainer'
import { darkTheme, lightTheme } from './theme/generalTheme'

const App = () => {
  const darkMode = useContext(DashboardContext)
  return (
    <Context>
      <DashboardContainer />
    </Context>
  )
}

export default App
