import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './DogDetails.css'

export class DogDetails extends Component {
    render() {
        let {dog}=this.props;
        return (
            <div className="container">
                <div className="DogDetails row justify-content-center">
                    <div className="col-11 col-lg-5 text-center">
                        <div className="DogDetails-card card">
                            <img className="card-img-top" src={dog.src} alt={dog.name} />
                            <div className="card-body">
                                <h1 className="card-title">{dog.name}</h1>
                                <h5 className="card-subtitle text-muted">Age: {dog.age} yrs</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                {dog.facts.map((fact,i) => (
                                    <li className="list-group-item" key={i}>{fact}</li>
                                ))}
                            </ul>
                            <div className="card-body">
                                <Link to="/dogs" className="btn btn-info">Go Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DogDetails
