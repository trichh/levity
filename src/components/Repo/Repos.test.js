import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../store';

import Repo from './Repo';

test('should render with repo props', () => {
  const iteration = 0;
  const repo = {
    name: 'react',
    html_url: 'https://github.com/facebook/react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    stargazers_count: 182384,
    topics: ["declarative", "frontend", "javascript", "library", "react", "ui"]
  };

  render(
    <Provider store={store}>
      <Repo iteration={iteration} repo={repo} key={iteration} />
    </Provider>
  );

  const description = screen.getByRole('heading', {name : 'react'});
  expect(description).toBeInTheDocument();
});
