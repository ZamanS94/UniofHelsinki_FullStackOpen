import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Button2 = ({ handleRate, text }) => (
  <button onClick={() => handleRate()}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
  ]

  const initialVotesCount = Array(anecdotes.length).fill(0)
  const [votesCount, setVotes] = useState(initialVotesCount)
  const [selected, setSelected] = useState(0)

  const handleRate = () => {
    const updatedVotesCount = [...votesCount]
    updatedVotesCount[selected] += 1
    setVotes(updatedVotesCount)
  }

  const handleClick = () => {
    setSelected((selected + 1) % anecdotes.length)
  }

  return (
    <div>
      <p>{anecdotes[selected]} </p>
      <p>has {votesCount[selected]} votes</p>
      <Button handleClick={handleClick} text='next anecdote' />
      <Button2 handleRate={handleRate} text='vote' />
    </div>
  )
}

export default App
