/* eslint-disable no-unused-vars */
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              setPersons([...persons, { name: newName }])
            }}
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => <div key={person.name}>{person.name}</div>)
      }
    </div>
  )
}

export default App