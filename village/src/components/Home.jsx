import React from 'react';

function Home(props) {
    const goToSmurfList = () => {
        props.history.push('/smurfs');
    };

    return (
        <div className="home-wrapper">
            <img
                className="home-image"
                src="https://media.wired.com/photos/592660f4f3e2356fd80090bf/master/w_582,c_limit/Smurfette_TA.jpg"
                alt=""
            />
            <button 
                className="home-button"
                onClick={goToSmurfList}
            >
                Smurfs
            </button>
        </div>
  );
}

export default Home;