import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Smurf from './Smurf';


class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs-list-wrapper">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link className="smurf-link" to={`/smurf/${smurf.id}`} key={smurf.id}>
               <div className="smurf-card">
                 <p>{smurf.name}</p>
                 <p>{smurf.age}</p>
                 <p>{smurf.height}</p>
               </div>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
