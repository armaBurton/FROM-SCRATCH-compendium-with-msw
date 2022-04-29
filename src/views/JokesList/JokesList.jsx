import { useJokeContext } from '../../context/JokeProvider';
import JokeRender from '../JokeRender/JokeRender';
import JokesArr from '../JokesArr/JokesArr';
import style from './JokesList.css';

export default function JokesList() {
  const {
    loading, setLoading,
    selected, setSelected,
  } = useJokeContext();

  function handleChange(e){
    e.preventDefault();
    setSelected(e.target.value);
  }

  function getRandom(){
    setLoading(true);
    location.href = '/';
  }

  function handleClick(){
    selected === 'Random' ? getRandom() : () => {};
  }

  console.log(selected);
  
  return(
    <section className={style.jokeGallery}>
      <header className={style.headSpace}>
        <h1>HARDY-HAR-HAR</h1>
        <div>
          <button onClick={handleClick}>Gimmie Moar Jokes</button>
          {/* <button onClick={() => {
            selected === 'Random' ? console.log('random') : 
              console.log('not random') }}>Gimmie Moar Jokes
          </button> */}
          {/* <button onClick={() => {
            selected === 'Random' ? () => {getRandom} : 
              () => {}}}>Gimmie Moar Jokes
          </button> */}

          {/* <button onClick={() => {
            selected === 'Random' ? () => {
              setLoading(true);
              location.href = '/'
            } : () => {}
          }}>Gimmie Moar Jokes</button> */}
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