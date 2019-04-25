import React from 'react';
import PropTypes from 'prop-types';

function Character(props) {
  return (
    <div>
      <div>
        <style jsx global>{`
          .char {
            margin-top: 10px;
            border: 1px solid black;
            margin: 10px 2px 0px 2px;
            font-family: sans-serif;

          }
          img {
            width: 250px;
            height: 250px;
            margin-top: 10px;
          }
        `}</style>
      </div>
      <div className="char">
        <img src={props.image}/>
        <p>{props.name}</p>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

Character.propTypes ={
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Character;