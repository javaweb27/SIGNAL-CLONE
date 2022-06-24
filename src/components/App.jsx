import "../styles/styles.scss"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Chat from "./pages/chat"
import Settings from "./pages/settings"
import Page404 from "./pages/page404"
//context
import AllProviders from "./context/AllProviders"
//subpages
import Profile from "./subpages/profile"
import Account from "./subpages/account"
import LinkedDevices from "./subpages/linked-devices"
import Appearance from "./subpages/appearance"
import ChatsSettings from "./subpages/chats-settings"
import Notifications from "./subpages/notifications"
import Privacy from "./subpages/privacy"
import DataStorage from "./subpages/data-storage"
import Welcome from "./pages/welcome"
import Register from "./pages/register"

const App = () => (
  <AllProviders>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="chat" element={<Chat/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="settings/profile" element={<Profile/>}/>
        <Route path="settings/account" element={<Account/>}/>
        <Route path="settings/linked_devices" element={<LinkedDevices/>}/>
        <Route path="settings/appearance" element={<Appearance/>}/>
        <Route path="settings/chats" element={<ChatsSettings/>}/>
        <Route path="settings/notifications" element={<Notifications/>}/>
        <Route path="settings/privacy" element={<Privacy/>}/>
        <Route path="settings/data_storage" element={<DataStorage/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </HashRouter>
  </AllProviders>
)

export default App
