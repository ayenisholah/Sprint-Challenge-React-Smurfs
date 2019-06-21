import React from 'react';

const Smurf = props => {
  const smurf = props.smurfs.find(smurf => smurf.id.toString() === props.match.params.id)
  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} cm tall</strong>
      <p>{smurf.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

