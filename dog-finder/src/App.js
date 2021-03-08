import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import DogList from './DogList';

// Images
import berkay from './Images/berkay.jpg';
import sarah from './Images/sarah.jpg';
import stephan from './Images/stephan.jpg';

export class App extends Component {
  static defaultProps ={
      dogs: [
      {
        name: "Berkay",
        age: 5,
        src: berkay,
        facts: [
          "Berkay loves eating popcorn.",
          "Berkay is a terrible guard dog.",
          "Berkay wants to cuddle with you!"
        ]
      },
      {
        name: "Sarah",
        age: 3,
        src: sarah,
        facts: [
          "Sarah has soooo much energy!",
          "Sarah is highly intelligent.",
          "Sarah loves people more than dogs."
        ]
      },
      {
        name: "Stephan",
        age: 4,
        src: stephan,
        facts: [
          "Stephan is not the brightest dog",
          "Stephan does not like walks or exercise.",
          "Stephan loves eating food."
        ]
      }
    ]
  }
  render() {
    return (
      <Route path='/dogs' render={()=><DogList dogs={this.props.dogs}/>}></Route>
    )
  }
}

export default App
