import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './component/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPersonName, setNewPersonName] = useState('')
  const [newPersonNumber, setNewPersonNumber] = useState('')

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
      .then((response) => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPersonName,
      number: newPersonNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewPersonName('')
    setNewPersonNumber('')
  }

  const handleNameChange = (event) => {
    setNewPersonName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewPersonNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newPersonName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newPersonNumber}
            onChange={handleNumberChange}
          />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default App
