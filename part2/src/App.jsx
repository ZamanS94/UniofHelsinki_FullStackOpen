import React, { useState, useEffect } from 'react'
import Person from './component/persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPersonName, setNewPersonName] = useState('')
  const [newPersonNumber, setNewPersonNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
  }, [])

  // we use this to read all the data from database

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newPersonName,
      number: newPersonNumber,
    }
  
    personService
      .create(personObject)
      .then(response => {
        setPersons([...persons, response])
        setNewPersonName('')
        setNewPersonNumber('')
      })
  }
  
// using this to create new object and then concate to old list

  const handleNameChange = event => {
    setNewPersonName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewPersonNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {persons.map(person => (
        <Person key={person.id} person={person} />
      ))}
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newPersonName} onChange={handleNameChange} />
        </div>
        <div>
          number:
          <input value={newPersonNumber} onChange={handleNumberChange} />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default App
