const Header = (props) => {
  return(
    <h1>Course: {props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>Part 1: {props.part1} - Exercises: {props.exercises1}</p>
      <p>Part 2: {props.part2} - Exercises: {props.exercises2}</p>
      <p>Part 3: {props.part3} - Exercises: {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Total Exercises: {props.total}</p>
  )

}
const App = () => {
  const course = 'BSIT'
  const part1 = 'Networking'
  const exercises1 = 10
  const part2 = 'Web Development'
  const exercises2 = 15
  const part3 = 'Database Management'
  const exercises3 = 12

  return (
    <div> 
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}



export default App