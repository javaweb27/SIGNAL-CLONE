import { AppearanceProvider } from "./appearance"
import { LoginStatusProvider } from "./login-status"

const AllProviders = ({ children }) => (
  <AppearanceProvider>
    <LoginStatusProvider>
      {children}
    </LoginStatusProvider>
  </AppearanceProvider>
)

export default AllProviders
