import { configureStore } from '@reduxjs/toolkit';

import GitReducer from './reducers/GitReducer';

export default configureStore({
  reducer: {
    git: GitReducer
  },
})
