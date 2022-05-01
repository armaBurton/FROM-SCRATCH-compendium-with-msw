import { getAllByRole, getAllByTestId, getByRole, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import fetch from 'cross-fetch';
import userEvent from '@testing-library/user-event';
import JokesList from './JokesList';
import App from '../../App';
import data from '../../mocks/jokesArr';
import JokeProvider from '../../context/JokeProvider';
import user from '../../mocks/jokesArr';

const server = setupServer(
  rest.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10', (req, res, ctx) => {
    return res(ctx.json(data))
  })
)

global.fetch = fetch;

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('JokesList', () => {
  test('it should click a button and get a new list of jokes', async () => {
    render(
      <MemoryRouter initialEntries={['/jokes']}>
        <JokeProvider>
          <App>
            <JokesList />
          </App>
        </JokeProvider>
      </MemoryRouter>
    );

    screen.getByText(/hardy-har-har/i);
    const button = screen.getByText(/gimmie moar jokes/i);
    userEvent.click(button);

    await screen.findByText(/loading/i);
    await screen.findByText(/hardy-har-har/i);

    let cards = [];
    for (let i = 0; i < 10; i++) {
      const card = await screen.findByTestId(i);

      card ? cards.push(card) : console.log(false);
    }
    expect(cards.length).toBe(10);
  })

  test('it should select a category from the dropdown and render and new array of matching jokes', async () => {
    render(
      <MemoryRouter initialEntries={['/jokes']}>
        <JokeProvider>
          <App>
            <JokesList />
          </App>
        </JokeProvider>
      </MemoryRouter>
    )

    expect(1).toEqual(1);
    screen.getByText(/hardy-har-har/i);

    userEvent.selectOptions(screen.getByRole('combobox'), 'Programming');
    expect(screen.getByText(/programming/i).selected).toBe(true);
    expect(screen.getByText(/pun/i).selected).toBe(false);

    userEvent.selectOptions(screen.getByRole('combobox'), 'Christmas');
    expect(screen.getByText(/programming/i).selected).toBe(false);
    expect(screen.getByText(/christmas/i).selected).toBe(true);
  })
})