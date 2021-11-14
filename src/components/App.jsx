import "../styles/styles.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import AllSettings from "./pages/allSettings"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="settings" element={<AllSettings/>}/>
    </Routes>
  </BrowserRouter>
)

export default App
