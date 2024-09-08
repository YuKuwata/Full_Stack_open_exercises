/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import { some } from 'lodash-es';

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
      <Filter persons={persons} setShownPersons={setShownPersons} />
      <PersonForm
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        newName={newName}
        setPersons={setPersons}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons shownPersons={shownPersons} />
    </div >
  )
}

export default App