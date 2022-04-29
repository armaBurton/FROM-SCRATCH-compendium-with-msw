const jokeFetch = async () => {
  try {
    // const jokes = await fetch('https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json');
    
    const jokes = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=12');
    
    const jokesJson = await jokes.json();

    return jokesJson;
  } catch (error) {
    console.error(error);
  }
}

export default jokeFetch;