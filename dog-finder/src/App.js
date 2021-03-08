import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import NavBar from './NavBar';

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
    const getDog = props => {
      let name =props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase()===name.toLowerCase()
      );
      return <DogDetails {...props} dog ={currentDog}/>
    }
    return (
      <div>
        <NavBar dogs={this.props.dogs}/>
        <Switch>
          <Route exact path='/dogs' render={()=><DogList dogs={this.props.dogs}/>}></Route>
          <Route exact path='/dogs/:name' render={getDog}></Route>
        </Switch>
      </div>
    )
  }
}

export default App
