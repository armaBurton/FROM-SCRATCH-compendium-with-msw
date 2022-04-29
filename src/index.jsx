import React from 'react';
import { render } from 'react-dom';
import App from './App';
import JokesProvider from './context/JokeProvider';

render(
  <React.StrictMode>
    <JokesProvider>
      <App />
    </JokesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);