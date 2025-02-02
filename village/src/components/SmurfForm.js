import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newsmurfs: {
        name: '',
        age: '',
        height: ''
      }
      
    };
  }

  addSmurf = event => {
    event.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', this.state)
      .then(res => {
        this.setState({
          smurfs: res.data,
          newsmurfs: {
            name: '',
            age: '',
            height: ''
          }
        });
        this.props.history.push('/smurfs')
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
