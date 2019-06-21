import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';

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
        <Link to="/">Smurf List</Link>
        <Link to="/smurf-form">Add Smurf</Link>
        <Route
          exact
          path="/"
          render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          exact
          path="/smurf-form"
          component={SmurfForm}
        />
      </div>
    );
  }
}

export default App;
