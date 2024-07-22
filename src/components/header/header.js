import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className="div-column">
            <div className="header">

            </div>
            <div className="footer">
                <ul className="div-row">
                    <li><NavLink to='/'>Main</NavLink></li>
                    <li><NavLink to='/vaccines'>Vaccines</NavLink></li>
                    <li><NavLink to='/treatments'>Treatments</NavLink></li>
                    <li><NavLink to='/add-new'>Add</NavLink></li>
                </ul>
            </div>
            <Outlet />
        </div>
        
    )
}

export default Header;