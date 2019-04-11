import React from 'react'
import { Link } from "react-router-dom";

import GoogleAuth from '../GoogleAuth'

const Navbar = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Twichlo</Link>
            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
                <GoogleAuth/>
            </div>
        </div>
    )
}

export default Navbar