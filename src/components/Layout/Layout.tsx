import React from 'react'
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import './layout.css';

const Layout = () => {
    return (
        <div className="container">
            <Navbar />
            <Home />
        </div>
    )
}

export default Layout
