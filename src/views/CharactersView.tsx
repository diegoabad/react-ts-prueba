import { useEffect, useState } from 'react';
import { ResponseDBZ, Character } from '../interfaces/DragonBall';

const CharactersView = () => {
  const [characters, setCharacters] = useState<Character[] | []>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          'https://dragonball-api.com/api/characters'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ResponseDBZ = await response.json();
        setCharacters(data.items);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      {characters.map((character: Character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
};

export default CharactersView;
