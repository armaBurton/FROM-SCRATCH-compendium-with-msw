import {
  createContext, 
  useContext, 
  useState
} from 'react';

const JokeContext = createContext();

export default function JokeProvider({ children }) {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  const jokeState = {
    jokes, setJokes,
    loading, setLoading,
  };

  return (
    <JokeContext.Provider value={jokeState}>
      {children}
    </JokeContext.Provider>
  )
}

export function useJokeContext(){
  return useContext(JokeContext);
}
