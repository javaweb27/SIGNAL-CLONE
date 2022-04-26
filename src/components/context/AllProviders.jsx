import { AppearanceProvider } from "./appearance"

const AllProviders = ({ children }) => (
  <AppearanceProvider>
    {children}
  </AppearanceProvider>
)

export default AllProviders
