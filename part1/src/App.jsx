const Header = (props) => {
  return (
    <div>
      <h1>
      {props.courseName}
      </h1>
    </div>
  )
}

const Part = (props) => {

  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )

}

const Content = (props) => {
  return (
    <div>
    <Part part = {props.part1} />
    <Part part = {props.part2}/>
    <Part part = {props.part3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
      Number of exercises {props.totalCount}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header courseName={course.name}/> 
      <Content 
      part1={course.parts[0]}
      part2={course.parts[1]}
      part3={course.parts[2]}
      />
      <Total totalCount = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
     
    </div>
  )
}

export default App
