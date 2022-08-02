import "../styles/styles.scss"
import { HashRouter, Routes, Route } from "react-router-dom"
import { AsPrivate, AsPublic } from "../lib/routeAccess"
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
        <Route path="/" element={<AsPublic page={<Welcome />} />} />
        <Route path="register" element={<AsPublic page={<Register />} />} />
        <Route path="login" element={<AsPublic page={<Login />} />} />
        <Route path="home" element={<AsPrivate page={<Home />} />} />
        <Route path="chat" element={<AsPrivate page={<Chat />} />} />
        <Route path="settings" element={<AsPrivate page={<Settings />} />} />
        <Route path="settings/profile" element={<AsPrivate page={<Profile />} />} />
        <Route path="settings/account" element={<AsPrivate page={<Account />} />} />
        <Route path="settings/linked_devices" element={<AsPrivate page={<LinkedDevices />} />} />
        <Route path="settings/appearance" element={<AsPrivate page={<Appearance />} />} />
        <Route path="settings/chats" element={<AsPrivate page={<ChatsSettings />} />} />
        <Route path="settings/notifications" element={<AsPrivate page={<Notifications />} />} />
        <Route path="settings/privacy" element={<AsPrivate page={<Privacy />} />} />
        <Route path="settings/data_storage" element={<AsPrivate page={<DataStorage />} />} />
        <Route path="*" element={<AsPrivate page={<Page404 />} />} />
      </Routes>
    </HashRouter>
  </AllProviders>
)

export default App
