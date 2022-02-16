import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../store';

import Filter from './Filter';

test('should render with filter props', () => {
  const iteration = 0;
  const topic = 'declarative';

  render(
    <Provider store={store}>
      <Filter filter={topic} filterType={'unselected'} key={iteration} />
    </Provider>
  );

  const filter = screen.getByText(/declarative/i);
  expect(filter).toBeInTheDocument();
});
