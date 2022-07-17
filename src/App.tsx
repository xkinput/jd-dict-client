import { useEffect } from 'react'
import { unstable_HistoryRouter as HistoryRouter, Router } from 'react-router-dom'
import { installErrorCodeMap } from './enum/error'
import { routerHistory, Routes } from './router'
import { checkStateAuthKey } from './utils/tool'

function App() {
  useEffect(() => {
    checkStateAuthKey()
    installErrorCodeMap()
  }, [])
  
  return (
    <HistoryRouter history={routerHistory}>
      <Routes />
    </HistoryRouter>
  )
}

export default App
