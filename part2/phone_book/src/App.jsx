/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { some } from 'lodash-es'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [shownPersons, setShownPersons] = useState(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input onChange={(event) => {
          if (!event.target.value) {
            setShownPersons(persons);
          }
          setShownPersons(persons.filter(person => person.name.toUpperCase().includes(event.target.value.toUpperCase())))
        }} />
      </div>
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
        shownPersons.map((person) => <div key={person.name}>{person.name}&nbsp;{person.number}</div>)
      }
    </div >
  )
}

export default App