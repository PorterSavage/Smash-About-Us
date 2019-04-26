import React from 'react';
import CharacterListAll from './CharacterListAll';
import CharacterListFloaties from './CharacterListFloaties';
import CharacterListFastFallers from './CharacterListFastFallers';
import CharacterListHeavyFallers from './CharacterListHeavies';



class CharacterList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      allCharacters: true,
      floatyCharacters: false,
      fastFallerCharacters: false,
      heavyFallerCharacters: false,
    };
  }

  handleCharListFloaty()  {
    this.setState({ allCharacters: false });
    this.setState({ floatyCharacters: true });
    this.setState({ fastFallerCharacters: false });
    this.setState({ heavyFallerCharacters: false });
  }

  handleCharListFastFaller() {
    this.setState({ allCharacters: false });
    this.setState({ floatyCharacters: false });
    this.setState({ fastFallerCharacters: true });
    this.setState({ heavyFallerCharacters: false });
  }

  handleCharListHeavyFaller() {
    this.setState({ allCharacters: false });
    this.setState({ floatyCharacters: false });
    this.setState({ fastFallerCharacters: false });
    this.setState({ heavyFallerCharacters: true });
  }

  handleCharListAll() {
    this.setState({ allCharacters: true });
    this.setState({ floatyCharacters: false });
    this.setState({ fastFallerCharacters: false });
    this.setState({ heavyFallerCharacters: false });
  }

  render() {
    let charFilter = null;
    if (this.state.allCharacters === true) {
      charFilter = <CharacterListAll/>
    } else if (this.state.floatyCharacters === true) {
      charFilter = <CharacterListFloaties/>
    } else if (this.state.fastFallerCharacters === true) {
      charFilter = <CharacterListFastFallers/>
    } else if (this.state.heavyFallerCharacters === true){
      charFilter = <CharacterListHeavyFallers/>
    } else {
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
          <button className="changeButton" onClick={this.handleCharListFloaty.bind(this)}>Floaties</button>
          <button className="changeButton" onClick={this.handleCharListFastFaller.bind(this)}>Fast-Faller</button>
          <button className="changeButton" onClick={this.handleCharListHeavyFaller.bind(this)}>Heavy-Faller</button>
          <button className="changeButton" onClick={this.handleCharListAll.bind(this)}>All</button>
        </div>
          {charFilter}
        </div>
      </div>
    );
  }
}

export default CharacterList;