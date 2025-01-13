import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "./Context/GlobalContext";


export default function AppNavList() {
    
   const {NavMenu} = useContext(GlobalContext)

    return(
        <nav>
            {NavMenu.map((curMenu) => (<NavLink key={curMenu.title} to={curMenu.path}>{curMenu.title}</NavLink>))}
        </nav>
    )
}