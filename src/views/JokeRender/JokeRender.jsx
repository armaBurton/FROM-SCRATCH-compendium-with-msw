import { useJokeContext } from '../../context/JokeProvider'
import { Link } from 'react-router-dom';
import style from './JokeRender.css';

export default function JokeRender({ joke, i }) {
  const {
    loading, setLoading
  } = useJokeContext();

  return (
    <Link to={`/jokes/${joke.id}`} data-testid={i}>
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