import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

const ContactList = ({initialContacts, onRemove}) => {
  return (
        <ul className={css.contactList}>
          {initialContacts.map((contacts) => (
              <li key={contacts.id} className={css.contact}>
                  <Contact key={contacts.id} data={contacts} onRemove={onRemove} />
              </li>
          ))}
        </ul>
  )
}

export default ContactList