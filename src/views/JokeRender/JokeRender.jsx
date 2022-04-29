import { useJokeContext } from '../../context/JokeProvider'
import { Link } from 'react-router-dom';
import style from './JokeRender.css';

export default function JokeRender({ joke }) {
  const {
    loading, setLoading
  } = useJokeContext();

  console.log(joke);

  return (
    <Link to={`/jokes/${joke.id}`}>
      <section className={style.jokeCard}>
        <div className={style.head}>
          <h3>
            {joke.category}
          </h3>
        </div>
        <div className={style.bodySection}>
          <p>{joke.setup}</p>
        </div>
      </section>
    </Link>
    )
}


// category: "Pun"
// delivery: "He eventually came around."
// flags: {nsfw: false, religious: false, political: false, racist: false, sexist: false, …}
// id: 280
// lang: "en"
// safe: true
// setup: "To prove he was right, the flat-earther walked to the end of the Earth."
// type: "twopart"