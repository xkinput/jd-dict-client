import { unstable_HistoryRouter as HistoryRouter, Router } from 'react-router-dom'
import { routerHistory, Routes } from './router'

function App() {
  return (
    <HistoryRouter history={routerHistory}>
      <Routes />
    </HistoryRouter>
  )
}

export default App
