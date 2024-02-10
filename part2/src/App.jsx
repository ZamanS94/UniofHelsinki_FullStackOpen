
import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "234-56789", id: 1
   }
  ]) 
  const [newPersons, setNewPersons] = useState('')
  const [newNumbers, setNewNumbers] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newPersons)) {
      alert(newPersons+' is already added to phonebook')
    } else {
      const personObject = {
        name: newPersons,
        number: newNumbers, id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewPersons('')
    }
  }

  const handleNameChange = (event) => {
    setNewPersons(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumbers(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <p>name: <input value={newPersons} onChange={handleNameChange} /></p>
        <p>number: <input value={newNumbers} onChange={handleNumberChange} /> </p>
        <p> <button type="submit">add</button></p>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key = {person.id}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App

// form -> event method -> new object create -> concat with real object
// input value -> handler event method -> will set value to newPersons