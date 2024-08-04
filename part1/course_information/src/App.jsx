/* eslint-disable react/prop-types */
const App = () => {
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

function Header(props) {
  const { course: { name } } = props;
  return (
    <h1>{name}</h1>
  )
}

function Content(props) {
  const { course: { parts } } = props;
  return (
    <>
      {
        parts.map((part, index) => (
          <p key={`${Date.now()}${index}`}>
            {part?.name} {part?.exercises}
          </p>
        ))
      }
    </>
  )
}

function Total(props) {
  const { course: { parts } } = props;
  return (
    <p>Number of exercises {parts.reduce(((previous, current) => previous + current.exercises), 0)}</p>
  )
}

export default App