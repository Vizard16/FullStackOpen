
const Header = (props) => {
  return <h1>{props.course.name}</h1>

}

const Part = (props) => {
	return (
		<p>
			{props.parts.name} {props.parts.exercises}
		</p>
	)
}

const Content = (props) => {
  return(
    <div>
      <Part parts= {props.parts[0]}/>
      <Part parts= {props.parts[1]}/>
      <Part parts= {props.parts[2]}/>



    </div>
  )
  
}
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
	)
}
//const 

//const Title = ({course}) => <h1>{course}</h1>

const App = () => {

  //DO it as objects
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
         name:'Fundamentals of React',
         exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14

      },
    ],   
  }
  return (
    <div>
      <Header course= {course}/>
      <Content parts = {course.parts}/>

      <Total parts = {course.parts}/>
    </div>
  )
}

export default App