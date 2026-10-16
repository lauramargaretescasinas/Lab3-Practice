const Header = (props) => {
  return(
    <h1>Course: {props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Total Exercises: {props.total}</p>
  )

}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
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