import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
useEffect (() => {
  axios.get('https://randomuser.me/api/').then((res) =>{
    setUsers((users) => users.push(res.data.results[0]))
  }, users)
})
  return (
    <>
      <div className="header">React Random Users From API</div>
      <div className="grid-container">
      <div className="grid-item">{users}</div>
      </div>
    </>
  )
}

export default App
