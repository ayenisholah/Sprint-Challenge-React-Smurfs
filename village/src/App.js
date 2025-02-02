import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';
import Smurf from './components/Smurf';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <Link to="/smurf-form">Add Smurf</Link>
        <Link to="/">Home</Link>
        <Link to="/smurfs">Smurf List</Link>
        <Route
         exact
         path="/"
         component={Home}
        />
        <Route
          exact
          path="/smurfs"
          render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          exact
          path="/smurf-form"
          render={(props) => <SmurfForm {...props} smurfs={this.state.smurfs}/>}
        />
        <Route
          exact
          path="/smurfs/:id"
          render={(props) => <Smurf {...props} smurfs={this.state.smurfs}/>}
        />
      </div>
    );
  }
}

export default App;
