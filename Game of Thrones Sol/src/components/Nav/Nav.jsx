import './nav.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titulo: "Formu",
        }
    }
    render() {
        return (
            <div className="Nav-container">
               <Link to="/" className='Link'>Home</Link>
               <Link to="/house/create" className='Link'>Create House</Link>
            </div>
        );
    };
};


  

export default Nav;
