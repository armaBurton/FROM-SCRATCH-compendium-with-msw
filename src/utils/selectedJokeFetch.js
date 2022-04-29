import { useJokeContext } from '../context/JokeProvider';

const selectedJokeFetch = async (selected) => {

  try {
    const jokes = await fetch(`https://v2.jokeapi.dev/joke/${selected}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10`);

    const jokesJson = await jokes.json();

    return jokesJson.jokes;
  } catch (error) {
    console.error(error);
  }
}

export default selectedJokeFetch;