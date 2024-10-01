import React from 'react';

interface Scientist {
  name: string;
  imageUrl: string;
  profession: string;
  awards: {
    count: number;
    list: string;
  };
  discovery: string;
}

interface ProfileProps {
  scientist: Scientist;
}

const Profile: React.FC<ProfileProps> = ({ scientist }) => {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={scientist.imageUrl}
        alt={scientist.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>
        <li>
          <b>Awards: {scientist.awards.count} </b>
          ({scientist.awards.list})
        </li>
        <li>
          <b>Discovered: </b>
          {scientist.discovery}
        </li>
      </ul>
    </section>
  );
};

export default function Gallery() {
  const scientists: Scientist[] = [
    {
      name: "Maria Skłodowska-Curie",
      imageUrl: "https://i.imgur.com/szV5sdGs.jpg",
      profession: "physicist and chemist",
      awards: {
        count: 4,
        list: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
      },
      discovery: "polonium (element)"
    },
    {
      name: "Katsuko Saruhashi",
      imageUrl: "https://i.imgur.com/YfeOqp2s.jpg",
      profession: "geochemist",
      awards: {
        count: 2,
        list: "Miyake Prize for geochemistry, Tanaka Prize"
      },
      discovery: "a method for measuring carbon dioxide in seawater"
    }
  ];

  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist, index) => (
        <Profile key={index} scientist={scientist} />
      ))}
    </div>
  );
}