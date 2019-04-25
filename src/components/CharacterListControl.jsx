import React from 'react';
import CharacterListAll from './CharacterListAll';
import CharacterListFloaties from './CharacterListFloaties';



class CharacterList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      allCharacters: true,
      floatyCharacters: false
    };
    this.handleCharListAll = this.handleCharListAll.bind(this);
    this.handleCharListFloaty = this.handleCharListFloaty.bind(this);
  }

  handleCharListFloaty() {
    this.setState({ allCharacters: false });
    this.setState({ floatyCharacters: true });
  }

  handleCharListAll() {
    this.setState({ allCharacters: true });
    this.setState({ floatyCharacters: false });
  }

  render() {
    let charFilter = null;
    if (this.state.allCharacters === true) {
      charFilter = <CharacterListAll/>
    } else if (this.state.floatyCharacters === true) {
      charFilter = <CharacterListFloaties/>
    }
    else {
      charFilter =
      <div>
        <h1>Fail</h1>
      </div>
    }
    return (
      <div>
        <div>
        <style>{`
        .changeButton {
          background-color: red;
        }
          `}</style>
        </div>
        <div className="charLists">
        <div>
          <button className="changeButton" onClick={this.handleCharListFloaty}>Floaties</button>
          <button className="changeButton" onClick={this.handleCharListAll}>All</button>
        </div>
          {charFilter}
        </div>
      </div>
    );
  }
}

export default CharacterList;