import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Redirect
} from 'react-router-dom';
import { useJokeContext } from './context/JokeProvider';
import { useEffect } from 'react'
import jokeFetch from './utils/jokeFetch';
import JokesList from './views/JokesList/JokesList';
import JokeAnswer from './views/JokeAnswer/JokeAnswer';
import style from './App.css';

export default function App() {
  const {
    jokes, setJokes,
    loading, setLoading,
  } = useJokeContext();

  useEffect(() => {
    async function getJokes(){
      setLoading(true);
      const jokesList = await jokeFetch();

      setJokes(await jokesList.jokes); 
      setLoading(false);
    }

    getJokes();
  }, [])

  console.log(jokes);

  return (
    <Router>
      <Switch>
        <Route path='/jokes/:id'>
          <JokeAnswer />
        </Route>
        <Route path='/jokes'>
          <JokesList />
        </Route>
        <Route path='/'>
          <p>Home</p>
          <Redirect to='/jokes'>Jokes List</Redirect>
        </Route>
      </Switch>
    </Router>
  )

}
