import React from 'react'

function Course(props) {
  return (
    <div className="Course">
      <Header text={props.course.name}></Header>
      <Content parts={props.course.parts}></Content>
    </div>
  )
}

function Header(props) {
  return <h1>{props.text}</h1>
}

function Content(props) {
  const parts = props.parts;
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0)
  
  return (
    <>
      {parts.map(part => 
        <Part 
          key={part.id}
          part={part}
        ></Part>
      )}
      <b>total of {totalExercises} exercises</b>
    </>
  )
}

function Part(props) {
  return <p>{props.part.name} {props.part.exercises}</p>
}

function App() {
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

  return (
    <>
      {courses.map(course =>
        <Course key={course.id} course={course}></Course>
      )}
    </>
  )
};

export default App;