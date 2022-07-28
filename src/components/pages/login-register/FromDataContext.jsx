import { createContext, useContext, useState } from "react"

const Context = createContext()

const initialState = { email: "", password: "" }

export const useFormDataContext = () => useContext(Context)

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialState)

  return <Context.Provider value={[formData, setFormData]}>
    {children}
  </Context.Provider>
}