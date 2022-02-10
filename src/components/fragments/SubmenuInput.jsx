//Usado para las opciones de un submenu en un div con la clase container-fixed
const SubmenuInput = ({name, id, type, event, children}) => (
  <li>
    <label htmlFor={id}>
      <input name={name} id={id} type={type} {...event} />
      {children}
    </label>
  </li>
)

export default SubmenuInput
