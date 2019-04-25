import React from 'react';
import Roster from '../assets/images/smash.png';
import CharacterListControl from './CharacterListControl';

function About(){
  return (
    <div>
      <div>
        <style jsx global>{`
          .roster {
            width: 100%;
            height: 650px;
            margin-top: 3%;
          }
          .imgText {
            font-size: 40px;
            font-family: sans-serif;
            color: white;
            text-shadow: 1px 1px black;
            margin-top: -650px;
            text-align: center;
          }
          .aboutPage {
            display: grid;
            grid-template-rows: 1fr 4fr;
          }
        `}</style>
      </div>
      <div className="aboutPage">
        <div>
          <img className='roster' src={Roster}/>
          <p className="imgText">Our diverse team!</p>
        </div>
        <div>
          <CharacterListControl/>
        </div>
      </div>
    </div>
  );
}

export default About;