import { createContext, useContext, useState } from "react"

export interface I_FormDataState {
  email: string;
  password: string;
}

const Context = createContext<
  readonly [
    I_FormDataState,
    React.Dispatch<React.SetStateAction<I_FormDataState>>
  ]
>(undefined!)

const initialState = { email: "", password: "" }

export const useFormDataContext = () => useContext(Context)

export const FormDataProvider = ({ children }: { children: JSX.Element }) => {
  const [formData, setFormData] = useState(initialState)

  return <Context.Provider value={[formData, setFormData]}>
    {children}
  </Context.Provider>
}