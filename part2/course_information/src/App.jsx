/* eslint-disable react/prop-types */

const Header = (props) => {
  const { name } = props;
  return <h1>{name}</h1>
}

const Content = (props) => {
  const { parts } = props;
  return (
    parts.map(part => <Part part={part} key={part.id} />)
  )
}

const Part = (props) => {
  const { part } = props;
  return (
    <div key={part.id}>
      <span>{part.name}</span>
      &nbsp;
      <span>{part.exercises}</span>
    </div>
  )
}

const Course = (props) => {
  const { course } = props;
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Sum sum={course.parts.reduce((prev, curr) => prev + curr.exercises, 0)} />
    </div>
  )
}

const Sum = (props) => {
  const { sum } = props;
  return <span>total of {sum} exercises</span>
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }

  return <Course course={course} />
}

export default App