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
    <div>
      {
        courses.map(course => <Course course={course} key={course.id} />)
      }
    </div>
  )
}

export default App