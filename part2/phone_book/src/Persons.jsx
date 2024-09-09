export default function Persons(props) {
    const { persons, filter } = props;
    const shownPersons = persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()));
    return (
        shownPersons.map((person) => <div key={person.name}>{person.name}&nbsp;{person.number}</div>)
    )
}
