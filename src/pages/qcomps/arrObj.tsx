import { useState } from 'react';
import { ItemListProps } from '../../types/arrObj';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId: number, nextSeen: boolean) {
    // makes a shallow copy of myList, so ay changes change initialList, which changes yourList
    // const tmpList = myList.map(e => {
        // if (e.id === artworkId) {
        //     e.seen = nextSeen
        // }
        // return e
    //}
    const tmpList = myList.map(e => {
        if (e.id === artworkId) {
          return {...e, seen: nextSeen}
        } else {
          return e
        }
    });
    setMyList(tmpList);
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    // const tmpList = yourList.map(e => {
    //     if (e.id === artworkId) {
    //         e.seen = nextSeen
    //     }
    //     return e
    // });

    const tmpList = yourList.map(e => {
        if (e.id === artworkId) {
          return {...e, seen: nextSeen}
        } else {
          return e
        }
    });
    setYourList(tmpList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
