/* eslint-disable react/prop-types */
export default function Filter(props) {
    const { setShownPersons, persons } = props;
    return (
        <div>
            filter shown with
            <input onChange={(event) => {
                if (!event.target.value) {
                    setShownPersons(persons);
                }
                setShownPersons(persons.filter(person => person.name.toUpperCase().includes(event.target.value.toUpperCase())))
            }} />
        </div>
    )
}
