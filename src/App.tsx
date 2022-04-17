import { useState } from 'react'
import  PropTest from './PropTest'


function App() {
  const [data, setData] = useState({
    name: 'John Doe',
  })
  return (
    <div className="text-center">
      <PropTest value={data}></PropTest>
    </div>
  )
}

export default App
