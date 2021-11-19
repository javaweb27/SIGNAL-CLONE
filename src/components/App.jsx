import "../styles/styles.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import AllSettings from "./pages/allSettings"
import Page404 from "./pages/page404"
//subpages
import Profile from "./subpages/profile/Profile"
import Account from "./subpages/account/Account"
import LinkedDevices from "./subpages/linked-devices/LinkedDevices"
import Appearance from "./subpages/appearance/Appearance"
import ChatsSettings from "./subpages/chats-settings/ChatsSettings"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="settings" element={<AllSettings/>}/>
      <Route path="settings/profile" element={<Profile/>}/>
      <Route path="settings/account" element={<Account/>}/>
      <Route path="settings/linked-devices" element={<LinkedDevices/>}/>
      <Route path="settings/appearance" element={<Appearance/>}/>
      <Route path="settings/chats" element={<ChatsSettings/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
  </BrowserRouter>
)

export default App
