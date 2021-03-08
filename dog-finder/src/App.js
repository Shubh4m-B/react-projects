import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Pricing</a>
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </nav>
        <h1 className="display-1">Hello</h1>
      </div>
    )
  }
}

export default App
