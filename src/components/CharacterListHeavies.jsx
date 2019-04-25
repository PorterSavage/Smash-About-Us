import React from 'react';
import Character from './Character';

let heavyFallerList = [
  {
    img: "https://www.ssbwiki.com/images/thumb/c/c9/Donkey_Kong_SSBU.png/250px-Donkey_Kong_SSBU.png",
    name: "Donkey Kong",
    title: "Project Manager",
    category: "heavy"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/250px-Bowser_SSBU.png",
    name: "Bowser",
    title: "Security",
    category: "heavy"
  }
]

function CharacterListHeavyFallers() {
  return (
    <div>
      <div>
        <style jsx global>{`
          .heavyFaller {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-top: 20%;
            text-align: center;
          }
        `}</style>
      </div>
      <div className="heavyFaller">
        <div>
          {heavyFallerList.map((character, index) => (
          <Character image={character.img}
          name={character.name}
          title={character.title}
          key={index}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterListHeavyFallers;