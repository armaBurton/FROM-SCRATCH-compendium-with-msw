import { useJokeContext } from '../../context/JokeProvider';
import JokeRender from '../JokeRender/JokeRender';
import JokesArr from '../JokesArr/JokesArr';
import style from './JokesList.css';

export default function JokesList() {
  const {
    jokes, setJokes,
    loading, setLoading
  } = useJokeContext();

  return(
    <section className={style.jokeGallery}>
      <header className={style.headSpace}>
        <h1>HARDY-HAR-HAR</h1>
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
  )

  // return <section className={style.jokeGallery}>
  //   <header>HARDY-HAR-HAR</header>
  //   <div className={style.jokesList}>
  //     {
  //       loading ? (<h1>loading#@*!</h1>) : (
  //         <>
  //           {
  //             jokes.map((joke, i) => <JokeRender key={`${joke}${i}`} joke={joke} data-testid={i}/>)
  //           }
  //         </>
  //       )
  //     }
  //   </div>
  // </section>
}