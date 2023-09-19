import React from 'react'
import { NavLink } from 'react-router-dom'

//const arrow functionla componant
const Menu = (props)=>{
    return(
        <nav className='menu'>
            <div id="logo">
                <NavLink to={`/`}>Portfolio</NavLink>
                
            </div>
            <div>
                <ul className='menu-right'>
                    <li><NavLink to={`/home`}>Home</NavLink> </li>
                    <li><NavLink to={`/about`}>About</NavLink> </li>
                    <li><NavLink to={`/resume`}>Resume</NavLink> </li>
                    <li><NavLink to={`/projects`}>Projecs</NavLink> </li>
                    <li><NavLink to={`/contact`}>Contact</NavLink> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu