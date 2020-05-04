import React from 'react'

function App() {
  function toggle(e) {
    let status = e.target.textContent

    switch (status) {
      case 'ON':
        e.target.textContent = 'OFF'
        break
      case 'OFF':
        e.target.textContent = 'ON'
        break
      default:
        return
    }
  }

  return <button onClick={toggle}>ON</button>
}

export default App;