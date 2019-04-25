import React from 'react';
import Character from './Character';

let fastFallerList = [
  {
    img: "https://www.ssbwiki.com/images/thumb/8/84/Link_SSBU.png/250px-Link_SSBU.png",
    name: "Link",
    title: "Security",
    category: "fast-faller"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/2/2f/Fox_SSBU.png/250px-Fox_SSBU.png",
    name: "Fox",
    title: "Lead Developer",
    category: "fast-faller"
  },
]

let fastFallerList2 = [
  {
    img: "https://www.ssbwiki.com/images/thumb/d/da/Greninja_SSBU.png/250px-Greninja_SSBU.png",
    name: "Greninja",
    title: "Statistical Analyst",
    category: "fast-faller"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/8/80/Falco_SSBU.png/250px-Falco_SSBU.png",
    name: "Falco",
    title: "Lead User Interface Developer",
    category: "fast-faller"
  },
]

function CharacterListFastFallers() {
  return (
    <div>
      <div>
        <style jsx global>{`
          .fastFaller {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-top: 20%;
            text-align: center;
          }
        `}</style>
      </div>
      <div className="fastFaller">
        <div>
          {fastFallerList.map((character, index) => (
          <Character image={character.img}
          name={character.name}
          title={character.title}
          key={index}
          />
          ))}
        </div>
        <div>
          {fastFallerList2.map((character, index) => (
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

export default CharacterListFastFallers;