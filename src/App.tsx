import { useEffect, useState, type FormEvent } from "react"
import { logMeIn } from "./services/publicAPI"
import { getAuthUserData } from "./services/protectedURL"

const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const sendLoginData = (e:FormEvent) => {
    e.preventDefault()
    logMeIn(username,password)
  }

  useEffect(()=>{
    getAuthUserData()
  },[])

  return (
    <div>

      <form onSubmit={sendLoginData}>
        <label>username</label><br/>
        <input  type="text" 
                value={username} 
                onChange={(e)=>setUsername(e.target.value)}/><br/>

        <label>password</label><br/>
        <input  type="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}/><br/>

        <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default App