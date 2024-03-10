// import library 
import { NavLink } from "react-router-dom"

// import assets 
import styles from "./styles.module.css"
import { navLink } from "./content"

export function Sidebar() {
    return (
        <nav className={styles.sidebar}>
            <ul>
                {navLink.map((element, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={element.path} className={({ isActive }) => isActive ? styles.active : undefined}>
                                {element.icon}  {element.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}


