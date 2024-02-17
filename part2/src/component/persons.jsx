import React from 'react'

const Person = ({ person,handleClick}) => {
  return (
    <p key={person.id}>
      {person.name} {person.number} 
      <button onClick={() => handleClick(person.id)}>delete</button>
    </p>
  )
}

export default Person
