//Usado para las opciones de un menu en container fixed
const LiField = ({name, id, type, event, children}) => (
  <li>
    <label htmlFor={id}>
      <input name={name} id={id} type={type} {...event} />
      {children}
    </label>
  </li>
)

export default LiField
