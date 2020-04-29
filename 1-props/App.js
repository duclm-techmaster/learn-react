import React from 'react'

function Header(props) {
  return <h1>{props.text}</h1>
}

function Content(props) {
  return (
    <>
      <Part part={props.parts[0]}></Part>
      <Part part={props.parts[1]}></Part>
      <Part part={props.parts[2]}></Part>
    </>
  )
}

function Part(props) {
  return <p>{props.part.name} {props.part.exercises}</p>
}

function Total(props) {
  return <p>Number of exercises {props.totalExercises}</p>;
}

function App() {
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
  };

  const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0)

  return (
    <>
      <Header text={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total totalExercises={totalExercises}></Total>
    </>
  )
};

export default App;