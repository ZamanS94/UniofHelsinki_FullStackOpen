import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updatedgood = good + 1
    setGood(good + 1)
    setTotal(updatedgood+bad+neutral)
    console.log("g",total)
  }

  const handleNeutralClick = () => {
    const updatedneutral = neutral +1
    setNeutral(neutral + 1)
    setTotal(good+bad+updatedneutral)
    console.log("n",total)
  }

  const handleBadClick = () => {
    const updatedbad = bad +1
    setBad(bad + 1)
    setTotal(good+neutral+updatedbad)
    console.log("bad",total)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good - bad ) / total}</p>
      <p>positive {good/total*100}%</p>
    </div>
  )
}

export default App


