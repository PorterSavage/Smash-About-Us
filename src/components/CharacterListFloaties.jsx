import React from 'react';
import Character from './Character';

let floatyList = [
  {
    img: "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/250px-Mario_SSBU.png",
    name: "Mario",
    title: "President",
    category: "floaty"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/250px-Samus_SSBU.png",
    name: "Samus",
    title: "Head Data Analyst",
    category: "floaty"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/8/8d/Yoshi_SSBU.png/250px-Yoshi_SSBU.png",
    name: "Yoshi",
    title: "Tax Guy",
    category: "floaty"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/0/07/Kirby_SSBU.png/250px-Kirby_SSBU.png",
    name: "Kirby",
    title: "Emotional Support",
    category: "floaty"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/9/93/Pikachu_SSBU.png/250px-Pikachu_SSBU.png",
    name: "Pikachu",
    title: "Electrical Engineer",
    category: "floaty"
  }
]

let floatyList2 = [
  {
    img: "https://www.ssbwiki.com/images/thumb/b/bb/Luigi_SSBU.png/250px-Luigi_SSBU.png",
    name: "Luigi",
    title: "Manager",
    category: "floaty"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/8/82/Ness_SSBU.png/250px-Ness_SSBU.png",
    name: "Ness",
    title: "Child Genius",
    category: "floaty"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/250px-Peach_SSBU.png",
    name: "Peach",
    title: "Secretary",
    category: "floaty"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/3/3f/Dr._Mario_SSBU.png/250px-Dr._Mario_SSBU.png",
    name: "Dr. Mario",
    title: "Plumber",
    category: "floaty"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/c/cb/Mr._Game_%26_Watch_SSBU.png/250px-Mr._Game_%26_Watch_SSBU.png",
    name: "Mr. Game and Watch",
    title: "Bitrate Analyst",
    category: "floaty"
  }
]

function CharacterListFloaties() {
  return(
    <div>
      <div>
        <style jsx global>{`
          .floaties {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-top: 20%;
            text-align: center;
          }
        `}</style>
      </div>
      <div className="floaties">
        <div>
        {floatyList.map((character, index) => (
          <Character image={character.img}
          name={character.name}
          title={character.title}
          key={index}
          />
          ))}
        </div>
        <div>
        {floatyList2.map((character, index) => (
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

export default CharacterListFloaties;