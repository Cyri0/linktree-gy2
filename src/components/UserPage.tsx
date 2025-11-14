import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserLinks } from "../services/publicAPI"

type LinkType = {
    id: number,
    title: string,
    url: string
}

const UserPage = () => {
  const {username} = useParams()
  const [links, setLinks] = useState<LinkType[]>([])
  useEffect(()=>{
    if(username)
        
        getUserLinks(username).then(data => setLinks(data.links))
  },[username])

  return (
    <div>
        <h1>Üdövöllek {username} oldalán!</h1>
        {links.map(link => <a href={link.url}>{link.title}</a>)}
    </div>
  )
}

export default UserPage