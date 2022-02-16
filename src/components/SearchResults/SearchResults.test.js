import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import MockStore from './MockStore';

import SearchResults from './SearchResults';

test('should render with no repositories', () => {
  render(
    <Provider store={store}>
      <SearchResults />
    </Provider>
  );

  const repos = screen.getByText(/No Repositories Found/i);
  expect(repos).toBeInTheDocument();
});

test('should render with repositories', () => {
  render(
    <Provider store={MockStore}>
      <SearchResults />
    </Provider>
  );

  const repos = screen.queryByText(/No Repositories Found/i);
  expect(repos).not.toBeInTheDocument();
});
