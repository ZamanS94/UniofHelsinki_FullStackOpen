const Header = (props) => {
  return (
    <div>
      <h1>
      {props.courseName}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
      {props.partName} {props.exerciseName}
      </p>
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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course}/> 
      <Content partName={part1} exerciseName={exercises1}/>
      <Content partName={part2} exerciseName={exercises2}/>
      <Content partName={part3} exerciseName={exercises3}/>
      <Total totalCount = {exercises1 + exercises2 + exercises3} />
     
    </div>
  )
}

export default App


