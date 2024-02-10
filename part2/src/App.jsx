
const Course = ({course}) => {
  let name = course.name
  const result = course.parts.map(part =>
   <p key = {part.id}> 
   {part.name} {part.exercises}</p>
  )

  let sum = 0
  course.parts.map(part =>
    sum = sum + part.exercises
  )

  return(
    <div>
    <h1>{name}</h1>
    {result}
    <p><b>total of {sum}</b></p>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }

  return <Course course={course} />
}

export default App


