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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={courses} />
}

export default App



