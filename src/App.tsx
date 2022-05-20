import { useEffect } from 'react'
import { unstable_HistoryRouter as HistoryRouter, Router } from 'react-router-dom'
import { routerHistory, Routes } from './router'
import { checkStateAuthKey } from './utils/tool'

function App() {
  useEffect(() => {
    checkStateAuthKey()
  }, [])
  return (
    <HistoryRouter history={routerHistory}>
      <Routes />
    </HistoryRouter>
  )
}

export default App
