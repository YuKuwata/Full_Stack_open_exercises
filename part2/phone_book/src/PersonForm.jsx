/* eslint-disable react/prop-types */
import { find, isEmpty } from 'lodash-es';
import services from './services';
export default function PersonForm(props) {
    const { setNewName, setNewNumber, persons, newName, setPersons, newNumber, setErrorMessage } = props;
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const existedContact = find(persons, person => person?.name === newName);
            if (!isEmpty(existedContact)) {
                const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
                if (!confirm) {
                    return;
                }
                const updateRes = await services.update(existedContact.id, { name: newName, number: newNumber });
                const { status, statusText } = updateRes;
                if (status === 200 && statusText === 'OK') {
                    const getAllRes = await services.getAll();
                    setPersons(getAllRes.data);
                    setErrorMessage(`Updated ${newName}`);
                    setTimeout(() => { setErrorMessage(null) }, 3000);
                }
            } else {
                const postRes = await services.create({ name: newName, number: newNumber });
                const { status, statusText } = postRes;
                if (status === 201 && statusText === 'Created') {
                    const getRes = await services.getAll();
                    setPersons(getRes.data);
                    setErrorMessage(`Added ${newName}`);
                    setTimeout(() => { setErrorMessage(null) }, 3000);
                }
            }
        } catch (error) {
            const { response: { status } } = error;
            if (status === 404) {
                setErrorMessage(`Information of ${newName} has already been removed from server`);
                setTimeout(() => { setErrorMessage(null) }, 3000);
            }
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
