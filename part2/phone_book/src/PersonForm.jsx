/* eslint-disable react/prop-types */
import axios from 'axios';
import { some } from 'lodash-es';
export default function PersonForm(props) {
    const { setNewName, setNewNumber, persons, newName, setPersons, newNumber } = props;
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            if (some(persons, person => person?.name === newName)) {
                alert(`${newName} is already added to phonebook`);
                return;
            }
            const postRes = await axios.post('http://localhost:3001/persons', { name: newName, number: newNumber });
            const { status, statusText } = postRes;
            if (status === 201 && statusText === 'Created') {
                const getRes = await axios.get('http://localhost:3001/persons');
                setPersons(getRes.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
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
                    onClick={handleSubmit}
                >
                    add
                </button>
            </div>
        </form >
    )
}
