import { useEffect } from "react"
import { getAuthUserData } from "./services/protectedURL"
import LoginComponent from "./components/LoginComponent"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserPage from "./components/UserPage"

const App = () => {

  useEffect(()=>{
    getAuthUserData()
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginComponent />} />
        <Route path="/u/:username" element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App