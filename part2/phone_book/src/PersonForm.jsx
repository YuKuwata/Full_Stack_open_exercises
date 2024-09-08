/* eslint-disable react/prop-types */
import { some } from 'lodash-es';
export default function PersonForm(props) {
    const { setNewName, setNewNumber, persons, newName, setPersons, newNumber } = props;
    return (
        <form>
            <div>
                name: <input onChange={(event) => setNewName(event.target.value)} />
            </div>
            <div>
                number: <input onChange={(event) => setNewNumber(event.target.value)} />
            </div>
            <div>
                <button
                    type="submit"
                    onClick={(event) => {
                        event.preventDefault();
                        if (some(persons, person => person?.name === newName)) {
                            alert(`${newName} is already added to phonebook`);
                            return;
                        }
                        setPersons([...persons, { name: newName, number: newNumber }]);
                    }}
                >
                    add
                </button>
            </div>
        </form >
    )
}
