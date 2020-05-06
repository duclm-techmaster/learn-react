import React from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ points }) => {
  const { good, neutral, bad } = points
  const total = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * (-1)) / total
  const positive = good / total * 100 + " %"

  if (total) return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
  )

  return (
    <div>No feedback given</div>
  )
}

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  render() {
    return (
      <div>
        <h1>give feedback</h1>
        <Button
          handleClick={() => this.setState({
            good: this.state.good + 1
          })}
          text="good" />
        <Button
          handleClick={() => this.setState({
            neutral: this.state.neutral + 1
          })}
          text="neutral" />
        <Button
          handleClick={() => this.setState({
            bad: this.state.bad + 1
          })}
          text="bad" />

        <h1>statistics</h1>

        <Statistics points={this.state}/>
      </div>
    )
  }
}

export default App;