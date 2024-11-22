/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import services from './services';
import Notification from './Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    services.getAll()
      .then((res) => {
        const { data } = res;
        setPersons(data);
      }).catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter setFilter={setFilter} />
      <PersonForm
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        newName={newName}
        setPersons={setPersons}
        newNumber={newNumber}
        setErrorMessage={setErrorMessage}
      />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} setPersons={setPersons} />
    </div >
  )
}

export default App