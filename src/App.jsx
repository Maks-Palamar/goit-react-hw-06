import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';


function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

  const [contact, setContact] = useState(() => {
    const localContacts = localStorage.getItem('localContact');
    if (!localContacts) return initialContacts;
    return JSON.parse(localContacts);
  });

   useEffect(() => {
    localStorage.setItem("localContact", JSON.stringify(contact));
  }, [contact]);

  const [filter, setFilter] = useState('');

  const handleSearch = contact.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  const addContact = (newContact) => {
    setContact((defContacts) => {
      return [...defContacts, { id: nanoid(), ...newContact }]
    })
  }

  const removeContact = (todelete) => {
    setContact(defContacts => defContacts.filter(({id}) => id !== todelete))
  }

  return (
    <>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList initialContacts={handleSearch} onRemove={removeContact} />
    </>
  )
}

export default App
