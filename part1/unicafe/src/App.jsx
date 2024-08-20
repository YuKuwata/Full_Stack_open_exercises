/* eslint-disable react/prop-types */
import { useState } from 'react'

const Statistics = (props) => {
  const { good, bad, neutral } = props;

  // get percentage value
  const getPercentage = val => `${val * 100}%`;

  // get percentage value by precise
  // const getPercentageByPrecise = (val, precise = 0) => `${Math.round(val * Math.pow(10, precise + 2)) / Math.pow(10, precise)}% `
  return (
    good + neutral + bad > 0 ?
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{good + neutral + bad}</td>
          </tr>
          < tr>
            <td>average</td>
            <td>{good + neutral + bad > 0 ? (good - bad) / (good + neutral + bad) : 0}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{good + neutral + bad > 0 ? getPercentage((good / (good + neutral + bad)), 2) : getPercentage(0)}</td>
          </tr>
        </tbody>
      </table >
      :
      <span>No feedback given</span>
  )
}

const Button = (props) => {
  const { value, setValue, children } = props;
  return (
    <button
      onClick={() => setValue(value + 1)}
    >
      {children}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button value={good} setValue={setGood}>good</Button>
        <Button value={neutral} setValue={setNeutral}>neutral</Button>
        <Button value={bad} setValue={setBad}>bad</Button>
      </div>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App