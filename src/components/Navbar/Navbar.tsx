import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <ul className="links">
                <li className="link active">Products</li>
                <li className="link">Orders</li>
                <li className="link">Cart</li>
                <li className="link">Help</li>
                <li className="link">Profile Logo</li>
            </ul>
        </nav>
    )
}

export default Navbar
