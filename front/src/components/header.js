import React from "react"
import { Link } from 'react-router-dom'

const Header = () => {
    
    return(
        <div>
        <Link to={`/`}>
         <img src="https://cdn.discordapp.com/attachments/753405887032328314/756572026772127854/Sin_titulo-1.jpg"></img>
        </Link>
        </div>
    )
}

export default Header;