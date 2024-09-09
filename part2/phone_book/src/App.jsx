/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then((res) => {
        const { data } = res;
        setPersons(data);
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <PersonForm
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        newName={newName}
        setPersons={setPersons}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} />
    </div >
  )
}

export default App