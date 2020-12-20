import React, { Component } from 'react'
import {FaUsers} from 'react-icons/fa'
import { Link } from '@reach/router'

export class Navigation extends Component {
    render() {
        const {user} = this.props;
        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
                <div className="container fluid">
                    <Link to="/" className="navbar-brand">
                        <FaUsers className="mr-1"/> Meeting Log
                    </Link>
                    <div className="navbar-nav ml-auto">
                        {user ? (
                            <>
                                <Link to="/meetings" className="nav-item nav-link">meetings</Link>
                                <Link to="/login" className="nav-item nav-link">log out</Link>
                            </>
                        ):(
                            <>
                                <Link to="/login" className="nav-item nav-link">login</Link>
                                <Link to="/register" className="nav-item nav-link">register</Link>
                            </>
                        ) }
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation
