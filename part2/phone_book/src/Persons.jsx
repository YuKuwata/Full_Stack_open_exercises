export default function Persons(props) {
    const { shownPersons } = props;
    return (
        shownPersons.map((person) => <div key={person.name}>{person.name}&nbsp;{person.number}</div>)
    )
}
