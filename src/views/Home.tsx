import { useState } from 'react';
import { Character } from '../interfaces/DragonBall';

interface PropsHome {
  titulo: string;
  parrafo?: string;
}

const initialCharacter: Character = {
  id: 0,
  name: '',
  ki: '',
  maxKi: '',
  race: '',
  gender: '',
  description: '',
  image: '',
  affiliation: '',
  deletedAt: '',
};

const Home = ({ titulo, parrafo }: PropsHome) => {
  const [personaje, setPersonaje] = useState<Character>(initialCharacter);
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>{titulo}</h1>
      {parrafo && <p>{parrafo}</p>}
      <h2>Personaje</h2>
      {count}
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
};

export default Home;
