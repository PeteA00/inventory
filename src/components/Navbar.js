import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar-cont">
            <ul className="navbar-menu">
                <li className="menu-ist"><Link to="/inventory">Home</Link></li>
                <li className="menu-ist"><Link to="/add">Add Item</Link></li>
                <li className="menu-ist"><Link to="/edit">Edit Invetory</Link></li>
                <li className="menu-ist"><Link to="/history">History</Link></li>
            </ul>

        </nav>
    );
}

export default Navbar;