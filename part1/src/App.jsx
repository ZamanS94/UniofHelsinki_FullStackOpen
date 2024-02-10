import { useState } from 'react'

const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text} </td>
        <td>{props.value}</td>
      </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="natural" value={props.natural}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.total}/>
      <StatisticLine text="average" value={(props.good - props.bad) / props.total}/>
      <StatisticLine text="positive" value={props.good / props.total*100}/>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + bad + neutral)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + bad + updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  )
}

export default App




