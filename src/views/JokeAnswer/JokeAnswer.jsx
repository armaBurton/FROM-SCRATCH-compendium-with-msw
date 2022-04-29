
import { Redirect } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { useJokeContext } from '../../context/JokeProvider';
import style from './JokeAnswer.css';

export default function JokeAnswer() {
  const {
    jokes
  } = useJokeContext();

  const { id } = useParams()

  console.log(id);
  console.log(jokes);

  let currentJoke = {};

  for (let j of jokes){
    j.id === Number(id) ? currentJoke = j : () => {};
  }

  currentJoke === {} ? <Redirect to='/' /> : () => {};

  return (
    <Link to='/jokes'>
      <section className={style.wrapper}>
        <header>
          <h1>Category: <span>{currentJoke.category}</span></h1>
        </header>
        <div>
          <h3>{currentJoke.delivery}</h3>
        </div>
      </section>
    </Link>
    )
}


// category: "Programming"
// delivery: "Because his interpreter was busy collecting garbage."
// flags: {nsfw: false, religious: false, political: false, racist: false, sexist: false, …}
// id: 15
// lang: "en"
// safe: true
// setup: "Why did the Python programmer not respond to the foreign mails he got?"
// type: "twopart"