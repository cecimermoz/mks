import { Context } from './context/dashContext'
import { DashboardContainer } from './modules'

const App = () => {
  return (
    <Context>
      <DashboardContainer />
    </Context>
  )
}

export default App
