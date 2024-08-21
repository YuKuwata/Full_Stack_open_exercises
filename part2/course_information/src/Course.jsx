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

export default function Course(props) {
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