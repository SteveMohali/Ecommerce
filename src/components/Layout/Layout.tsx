import React from 'react'
import Navbar from '../Navbar/Navbar';
import './layout.css';

const Layout = (props: any) => {
    return (
        <div className="container">
            <Navbar />
            { props.children}
        </div>
    )
}

export default Layout
