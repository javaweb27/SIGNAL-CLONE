import { AppearanceProvider } from "./appearance"
import { LoginStatusProvider } from "./login-status"

const AllProviders = ({ children }: { children: JSX.Element }) => (
  <AppearanceProvider>
    <LoginStatusProvider>
      {children}
    </LoginStatusProvider>
  </AppearanceProvider>
)

export default AllProviders
