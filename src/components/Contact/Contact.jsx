
const Contact = ({data: {name, number, id}, onRemove}) => {
  return (
    <div>
          <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  )
}

export default Contact