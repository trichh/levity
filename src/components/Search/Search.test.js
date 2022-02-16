import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { searchRepos } from '../../helpers';

test('should return list of repositories', async () => {
  await searchRepos('facebook').then((response) => {
    expect(response).toHaveLength(100)
  });
});
