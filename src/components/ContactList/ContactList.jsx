import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../redux/contactsSlice/contactsSlice";
import {selectFilter} from "../../redux/contactsSlice/filterSlice";

const ContactList = () => {

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterPhrase = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterPhrase.toLowerCase()))

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  }

  // const handleDelete = (id) => {
  //   dispatch(deleteContact(id))
  // }

  return (
        <ul className={css.contactList}>
          {filteredContacts.map((oneContact) => (
              <li key={oneContact.id} className={css.contact}>
                  <Contact key={oneContact.id} data={oneContact} onDelete={handleDelete}/>
              </li>
          ))}
        </ul>
  )
}

export default ContactList