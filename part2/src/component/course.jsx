import React from 'react'

const Course = ({ course }) => {
    const courseShow = course.map(Eachcourse => {
      const partValues = Eachcourse.parts.map(part => (
        <p key={part.id}>{part.name} {part.exercises}</p>
      ))
      return (
        <div key={Eachcourse.id}>
          <h1>{Eachcourse.name}</h1>
          {partValues}
        </div>
      )
    })
    return (
      <div>
        {courseShow}
      </div>
    )
  }

  export default Course
  