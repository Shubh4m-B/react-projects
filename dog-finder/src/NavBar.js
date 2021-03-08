import React, { Component } from 'react'
import {NavLink,Link} from 'react-router-dom';
import './NavBar.css'

export class NavBar extends Component {
    render() {
        const dogLinks = this.props.dogs.map(dog=>(
            <li className="nav-item" key={dog.name}>
                <NavLink exact to={`/dogs/${dog.name}`} className="nav-link" >{dog.name}</NavLink>
            </li>
        ))
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navabr-brand brand" to="/dogs/"> Dog Finder</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>      
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/dogs" className="nav-link">Home</NavLink>
                        </li>
                        {dogLinks}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar
