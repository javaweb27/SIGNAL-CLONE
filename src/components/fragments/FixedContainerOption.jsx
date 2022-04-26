import { item, option } from "../../styles/fragments/fixed-container-option.module.scss"

//Usado para las opciones de FixedContainer
const FixedContainerOption = ({ name, id, text, radio, password, children, ...props }) => {
  const inputs = (
    text ? "text" :
    radio ? "radio" :
    password ? "password" : null
  )

  return (
    <li className={item}>
      <label className={option} htmlFor={id}>
        <input name={name} id={id} type={inputs} {...props} />
        {children}
      </label>
    </li>
  )
}

export default FixedContainerOption
