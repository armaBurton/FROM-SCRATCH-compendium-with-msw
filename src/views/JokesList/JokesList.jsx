import { useJokeContext } from '../../context/JokeProvider';
import selectedJokeFetch from '../../utils/selectedJokeFetch';
import JokeRender from '../JokeRender/JokeRender';
import JokesArr from '../JokesArr/JokesArr';
import style from './JokesList.css';

export default function JokesList() {
  const {
    loading, setLoading,
    selected, setSelected,
    jokes, setJokes
  } = useJokeContext();

  function handleChange(e){
    e.preventDefault();
    setSelected(e.target.value);
  }

  function getRandom(){
    setLoading(true);
    location.href = '/';
  }

  async function getSelected() {
    setLoading(true);
    const newJokes = await selectedJokeFetch(selected);
    setJokes(newJokes);
    setLoading(false);
  }

  function handleClick(){
    selected === 'Random' ? getRandom() : getSelected();
  }

  console.log(jokes);
  
  return(
    <section className={style.jokeGallery}>
      <header className={style.headSpace}>
        <h1>HARDY-HAR-HAR</h1>
        <div>
          <button onClick={handleClick}>Gimmie Moar Jokes</button>
          <select onChange={handleChange}>
            <option value="Random">Random</option>
            <option value="Programming">Programming</option>
            <option value="Misc">Misc</option>
            <option value="Dark">Dark</option>
            <option value="Pun">Pun</option>
            <option value="Spooky">Spooky</option>
            <option value="Christmas">Christmas</option>
          </select>
        </div>
      </header>
      <div className={style.jokesList}>
        {
          loading ? (
            <section className={style.jokesList}>
              <h1>loading#@*!</h1>
            </section>
          ) : ( <JokesArr /> )
        }
      </div>
    </section >
  )}