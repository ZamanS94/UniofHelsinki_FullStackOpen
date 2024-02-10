import React, { useState } from 'react'
import Person from "./component/persons"

const Filter = ({ persons, newSearch, setSearch }) => {
  
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with: <input value={newSearch} onChange={handleSearch} /></p>
      <ul>
        {filteredPersons.map(person => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  )
}

const Form = ({ addPerson, newPersons, newNumbers, setNewPersons, setNewNumbers }) => {

  const handleNameChange = event => {
    setNewPersons(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumbers(event.target.value)
  }

  return (
    <div>
      <form onSubmit={addPerson}>
        <p>name: <input value={newPersons} onChange={handleNameChange} /></p>
        <p>number: <input value={newNumbers} onChange={handleNumberChange} /> </p>
        <p> <button type="submit">add</button></p>
      </form>
    </div>
  )

}

const Show = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person}/>
      ))}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newPersons, setNewPersons] = useState('')
  const [newNumbers, setNewNumbers] = useState('')
  const [newSearch, setSearch] = useState('')

  const addPerson = event => {
    event.preventDefault()
    if (persons.some(person => person.name === newPersons)) {
      alert(newPersons + ' is already added to phonebook')
    } else {
      const personObject = {
        name: newPersons,
        number: newNumbers,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewPersons('')
      setNewNumbers('')
    }
  }

  return (
    <div>
      <Filter persons={persons} newSearch={newSearch} setSearch={setSearch} />
      <Form addPerson={addPerson} newPersons={newPersons} newNumbers={newNumbers}
        setNewPersons={setNewPersons} setNewNumbers={setNewNumbers} />
      <Show persons={persons} />
    </div>
  )
}

export default App
