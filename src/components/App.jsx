import "../styles/styles.scss"
import { HashRouter, Routes, Route } from "react-router-dom"
import { asPrivate, asPublic } from "../lib/routeAccess"
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
import { Register, Login } from "./pages/login-register"

const App = () => (
  <AllProviders>
    <HashRouter>
      <Routes>
        <Route path="/" element={asPublic(<Welcome />)} />
        <Route path="register" element={asPublic(<Register />)} />
        <Route path="login" element={asPublic(<Login />)} />
        <Route path="home" element={asPrivate(<Home />)} />
        <Route path="chat" element={asPrivate(<Chat />)} />
        <Route path="settings" element={asPrivate(<Settings />)} />
        <Route path="settings/profile" element={asPrivate(<Profile />)} />
        <Route path="settings/account" element={asPrivate(<Account />)} />
        <Route path="settings/linked_devices" element={asPrivate(<LinkedDevices />)} />
        <Route path="settings/appearance" element={asPrivate(<Appearance />)} />
        <Route path="settings/chats" element={asPrivate(<ChatsSettings />)} />
        <Route path="settings/notifications" element={asPrivate(<Notifications />)} />
        <Route path="settings/privacy" element={asPrivate(<Privacy />)} />
        <Route path="settings/data_storage" element={asPrivate(<DataStorage />)} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </HashRouter>
  </AllProviders>
)

export default App
