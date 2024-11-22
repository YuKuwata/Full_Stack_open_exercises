import services from "./services";
export default function Persons(props) {
    const { persons, filter, setPersons } = props;
    const shownPersons = persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()));
    const handleDelete = (person) => {
        return async () => {
            const confirm = window.confirm(`Delete ${person.name} ?`);
            if (!confirm) {
                return;
            }
            const deleteRes = await services.delete(person.id);
            const { status, statusText } = deleteRes;
            if (status === 200 && statusText === 'OK') {
                const getAllRes = await services.getAll();
                setPersons(getAllRes.data);
            }
        }
    }
    return (
        shownPersons.map((person) => (
            <div key={person.id}>
                {person.name}
                &nbsp;
                {person.number}
                &nbsp;
                <button
                    onClick={handleDelete(person)}
                >
                    delete
                </button>
            </div>
        ))
    )
}
