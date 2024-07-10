import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className="div-column">
            <div className="header">
                <ul className="div-row">
                    <li><NavLink to='/topics'>Topics</NavLink></li>
                    <li><NavLink to='/quizzes'>Quizzes</NavLink></li>
                    <li><NavLink to='/new-quiz'>New Quiz</NavLink></li>
                </ul>
            </div>
            <Outlet />
        </div>
        
    )
}

export default Header;