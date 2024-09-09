/* eslint-disable react/prop-types */
import { some } from 'lodash-es';
import services from './services';
export default function PersonForm(props) {
    const { setNewName, setNewNumber, persons, newName, setPersons, newNumber } = props;
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            if (some(persons, person => person?.name === newName)) {
                alert(`${newName} is already added to phonebook`);
                return;
            }
            const postRes = await services.create({ name: newName, number: newNumber });
            const { status, statusText } = postRes;
            if (status === 201 && statusText === 'Created') {
                const getRes = await services.getAll();
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
