import { useJokeContext } from '../../context/JokeProvider';
import style from './JokesList.css';

export default function JokesList() {
  const {
    jokes, setJokes,
    loading, setLoading
  } = useJokeContext();

  console.log(jokes);

  return <section className={style.jokeGallery}>
    <header>HARDY-HAR-HAR</header>
    <div className={style.jokesList}>
      {
        loading ? (<h1>loading#@*!</h1>) : (
          <> 
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
          </>
        )
      }
    </div>
  </section>
}