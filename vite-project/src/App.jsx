const Header = (props) => {
  return(
    <h1>Course: {props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1.name} exercises={props.part1.exercises} />
      <Part part={props.part2.name} exercises={props.part2.exercises} />
      <Part part={props.part3.name} exercises={props.part3.exercises} />
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
  
  const part1 = {
    name: 'Web Development',
    exercises: 10
  }

  const part2 = {
    name: 'Database Management',
    exercises: 7
  } 

  const part3 = {
    name: 'Mobile Development',
    exercises: 14
  }

  return (
    <div> 
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3} 
      />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}



export default App