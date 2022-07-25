const Input = ({ t, name, labelText, ...rest }) => {
  return <>
    <label htmlFor={name}>{labelText}</label>
    <input
      type={t}
      id={name}
      name={name}
      {...rest}
    />
  </>
}