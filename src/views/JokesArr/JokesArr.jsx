import { useJokeContext } from '../../context/JokeProvider'
import JokeRender from '../JokeRender/JokeRender';


export default function JokesArr() {
  const {
    jokes
  } = useJokeContext();

  console.log(jokes);

  return (
    <>
      {
        jokes.map((joke, i) => <JokeRender key={`${joke}${i}`} joke={joke} />)
      }
    </>
  )
}