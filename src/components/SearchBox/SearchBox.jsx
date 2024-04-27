import { Formik, Form, Field } from 'formik';
// import searchContact from '../../redux/contactsSlice/contactsSlice';
import { searchContact } from '../../redux/contactsSlice/filterSlice';
import { useDispatch } from 'react-redux';
const SearchBox = ({ value }) => {

    const dispatch = useDispatch();

    const onChange = (value) => {
        dispatch(searchContact(value))
    }
    
    return (
        <>
        <div>
            <p>Search contacts by name</p>
            <input type="text" value={value} onChange={event => onChange(event.target.value)}/>
        </div>
        
    </>
  )
}

export default SearchBox