import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/Logo.png'

const Navbar = () => {

    const menu ={
        color: '#ffffff', 
        marginLeft: '20px',
        backgroundColor: '#dadd19',
        padding: '7px 20px', 
        color: '#000000',
        borderRadius: '5px'
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="topNav">
                        <img src={logo} style={{width: '150px',height: '50px'}} alt="logo"/>
                        <Link style={menu} to="/">Home</Link>
                        <Link style={menu} to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;