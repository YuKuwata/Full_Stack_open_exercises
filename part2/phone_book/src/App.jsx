/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { some } from 'lodash-es'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
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
              setPersons([...persons, { name: newName, number: newNumber }])
            }}
          >
            add
          </button>
        </div>
      </form >
      <h2>Numbers</h2>
      {
        persons.map((person) => <div key={person.name}>{person.name}&nbsp;{person.number}</div>)
      }
    </div >
  )
}

export default App