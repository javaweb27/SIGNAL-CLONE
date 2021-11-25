import "../styles/styles.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Settings from "./pages/settings"
import Page404 from "./pages/page404"
//context
import AppearanceProvider from "./context/appearance/AppearanceProvider"
//subpages
import Profile from "./subpages/profile/Profile"
import Account from "./subpages/account/Account"
import LinkedDevices from "./subpages/linked-devices/LinkedDevices"
import Appearance from "./subpages/appearance/Appearance"
import ChatsSettings from "./subpages/chats-settings/ChatsSettings"
import Notifications from "./subpages/notifications/Notifications"
import Privacy from "./subpages/privacy/Privacy"

const App = () => (
  <AppearanceProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="settings/profile" element={<Profile/>}/>
        <Route path="settings/account" element={<Account/>}/>
        <Route path="settings/linked-devices" element={<LinkedDevices/>}/>
        <Route path="settings/appearance" element={<Appearance/>}/>
        <Route path="settings/chats" element={<ChatsSettings/>}/>
        <Route path="settings/notifications" element={<Notifications/>}/>
        <Route path="settings/privacy" element={<Privacy/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  </AppearanceProvider>
)

export default App
