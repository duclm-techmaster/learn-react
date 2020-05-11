import React from 'react'

class App extends React.Component {
  toggle = e => {
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

  render() {
    return <button onClick={this.toggle}>ON</button>
  }
}

export default App;