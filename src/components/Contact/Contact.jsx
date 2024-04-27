// import { useSelector } from "react-redux";
// import { selectContacts } from "../../redux/contactsSlice/contactsSlice";


const Contact = ({ onDelete, data }) => {
  
  // const contacts = useSelector(selectContacts)

  return (
    <div>
          <p>{data.name}</p>
          <p>{ data.number}</p>
          <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  )
}

export default Contact