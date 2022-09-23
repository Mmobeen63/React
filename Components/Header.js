import React from "react"
export function Header(){
    return(
        <header>
            <nav className="nav-items">
                <img src="./Assets/godiva.png" width="40px" />
                <ul className="header-item">
                    <li> first item </li>
                    <li> second item</li>
                    <li> third item</li>
                    <li> fourth item</li>        
                </ul>
            </nav>
        </header>
    )
}