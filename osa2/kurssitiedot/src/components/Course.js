import React from 'react'

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }
  
  const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const exercises = course.parts.map(part => part.exercises)
    const sum = exercises.reduce(reducer)
    return(
      <p>Number of exercises {sum}</p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        <ul>
          {course.parts.map(part => 
          <li key={part.id}>
            <Part part={part} />
          </li>
        )}
        </ul>
      </div>
    )
  }

export default Course