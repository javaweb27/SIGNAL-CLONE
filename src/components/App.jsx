import "../styles/styles.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import AllSettings from "./pages/allSettings"
import Page404 from "./pages/page404"


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="settings" element={<AllSettings/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
  </BrowserRouter>
)

export default App
