import { item, option } from "../../styles/fragments/fixed-container-option.module.scss"

//Usado para las opciones de FixedContainer
const FixedContainerOption = ({name, id, type, event, children}) => (
  <li className={item}>
    <label className={option} htmlFor={id}>
      <input name={name} id={id} type={type} {...event} />
      {children}
    </label>
  </li>
)

export default FixedContainerOption
