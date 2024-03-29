import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './DogList.css';

export class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center">Dog List</h1>
                <div className="container">
                    <div className="row">
                    {this.props.dogs.map(d => (
                        <div className="DogList-dog col-md-6 col-lg-4 text-center" key={d.name}>
                            <img src={d.src} alt={d.name}/>
                            <h3 className="DogList-name">
                                <Link to={`/dogs/${d.name}`} >{d.name}</Link>
                            </h3>
                        </div>
                    ))} 
                    </div>
                </div>
            </div>
        )
    }
}

export default DogList
