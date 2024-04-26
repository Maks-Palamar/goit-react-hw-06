import { Formik, Form, Field } from 'formik';
const SearchBox = ({value, onChange}) => {
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