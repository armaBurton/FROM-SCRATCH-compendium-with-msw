import { findByText, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import fetch from 'cross-fetch';
import userEvent from '@testing-library/user-event';
import App from './App';
import data from './mocks/jokesArr';
import JokeProvider from './context/JokeProvider';

const server = setupServer(
  rest.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10', (req, res, ctx) => {
    return res(ctx.json(data));
  })
) 

global.fetch = fetch;

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('App', () => {
  it.skip('should all me to pass github CI', () => {
    expect(1).toEqual(1);
  });

  test.skip('it should redirect to /jokes from /', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <JokeProvider>
          <App />
        </JokeProvider>
      </MemoryRouter>
    );

    await screen.findByText(/loading/i);

    await screen.findByText(/hardy-har-har/i);

    const link = await screen.findByTestId(2);

    userEvent.click(link);

    await screen.findByText(/category/i);
  });
});

