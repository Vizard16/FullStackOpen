
const Header = (props) => {

    return (
        <div>
            <h1>{props.name}</h1>
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
        {
          props.parts.map(
            (element) =>
              <Part key={element.id} part={element} />
          )
        }
      </div>
    )
  }

const Total = (props) => {
    const totalExercises = props.parts.reduce((acc, part) => acc + part.exercises, 0);

    return (
        <div>
            <strong><p> total of {totalExercises} excercises</p></strong>
        </div>
    )
}

const Course = (props) => {

    return (
        <div>
        <Header name = {props.course.name}/>
        <Content parts = {props.course.parts} />
        <Total parts={props.course.parts}/>

        </div>
    )
}


export default Course;