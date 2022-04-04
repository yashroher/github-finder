import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = ({title,icon}) =>  {
    // static defaultProps = { => For class
    //     title: "Github Finder",
    //     icon : "fab fa-github"
    // }
    // static propTypes = {
    //     title : PropTypes.string.isRequired,
    //     icon : PropTypes.string.isRequired
    // }
        return (
            <nav className = 'navbar bg-primary'>
                <h1>
                    <i className={icon}> {title} </i>
                </h1>
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/about">About</Link> 
                    </li>
                </ul>
            </nav>
        )
}

Navbar.propTypes = {
    icon : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    icon : "fab fa-github",
    title : "Github Finder"
}

export default Navbar
