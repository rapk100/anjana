import React from 'react';
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className='container'>
                    <Link className='navbar-brand' href="/">Job Portal</Link>

                    <div>
                        <Link className='btn btn-primary me-4' to="/register">Register</Link>
                        <Link className='btn btn-success' to="/login">Login</Link>
                    </div>
                </div>
                <div>
                </div>

            </nav>
            <div className='d-flex justify-content-between'>
                <h1>Home</h1>
                <Link className='btn btn-success' to="/personaldet">Personal Detail</Link>
            </div>


        </div>
    );
}

export default Navbar;
