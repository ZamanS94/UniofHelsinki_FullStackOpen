
import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'
   }
  ]) 
  const [newPersons, setNewPersons] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPersons
    }
    setPersons(persons.concat(personObject))
  }

  const handleNameChange = (event) => {
    setNewPersons(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <input value={newPersons} onChange={handleNameChange} />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p>{person.name}</p>
      ))}
    </div>
  )
}

export default App

// form -> event method -> new object create -> concat with real object
// input value -> handler event method -> will set value to newPersons