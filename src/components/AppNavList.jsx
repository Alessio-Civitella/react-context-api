import { Link, NavLink } from "react-router-dom";

export default function AppNavList() {
    
    return(
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/ChiSiamo"}>Chi siamo</NavLink>
            <NavLink to={"/ListaPost"}>Lista post</NavLink>
            <NavLink to={"/ListaPost/:id"}>Post</NavLink>
        </nav>
    )
}