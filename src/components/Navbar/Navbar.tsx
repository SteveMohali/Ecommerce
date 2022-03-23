import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar fill">
            <div className="logo">Logo</div>
            <ul className="links">
                <li className="link active"><a href="#">Products</a></li>
                <li className="link"><a href="#">Orders</a></li>
                <li className="link"><a href="#">Cart</a></li>
                <li className="link"><a href="#">Help</a></li>
                <li className="link"><a href="#">Profile Logo</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
