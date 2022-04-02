import { Context } from './context/dashContext'
import DashboardContainer from './modules/DashboardContainer'

const App = () => {
  return (
    <Context>
      <DashboardContainer />
    </Context>
  )
}

export default App
