import React from 'react';
import Character from './Character';

let charList = [
  {
    img: "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/250px-Mario_SSBU.png",
    name: "Mario",
    title: "President",
    category: "floaty"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/c/c9/Donkey_Kong_SSBU.png/250px-Donkey_Kong_SSBU.png",
    name: "Donkey Kong",
    title: "Project Manager",
    category: "heavy"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/8/84/Link_SSBU.png/250px-Link_SSBU.png",
    name: "Link",
    title: "Security",
    category: "fast-faller"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/250px-Samus_SSBU.png",
    name: "Samus",
    title: "Head Data Analyst",
    category: "floaty"
  }
];

let charList2 = [
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
    img: "https://www.ssbwiki.com/images/thumb/2/2f/Fox_SSBU.png/250px-Fox_SSBU.png",
    name: "Fox",
    title: "Lead Developer",
    category: "fast-faller"
  },
  {
    img: "https://www.ssbwiki.com/images/thumb/9/93/Pikachu_SSBU.png/250px-Pikachu_SSBU.png",
    name: "Pikachu",
    title: "Electrical Engineer",
    category: "floaty"
  }
]

let charList3 = [
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
    img: "https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/250px-Bowser_SSBU.png",
    name: "Bowser",
    title: "Security",
    category: "heavy"
  }
];

let charList4 = [
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

function CharacterListAll() {
  return(
    <div>
        <div>
          <style jsx global>{`
            .charLists {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              text-align: center;
              margin-top: 20%;
            }
            .changeStateButton {
              background-color: red;
            }
          `}</style>
        </div>
        <div className="charLists">
          <div>
            {charList.map((character, index) => (
              <Character image={character.img}
              name={character.name}
              title={character.title}
              key={index}
              />
              ))}
          </div>
          <div>
            {charList2.map((character, index) => (
              <Character image={character.img}
              name={character.name}
              title={character.title}
              key={index}
              />
              ))}
          </div>
          <div>
            {charList3.map((character, index) => (
              <Character image={character.img}
              name={character.name}
              title={character.title}
              key={index}
              />
              ))}
          </div>
          <div>
            {charList4.map((character, index) => (
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

export default CharacterListAll;