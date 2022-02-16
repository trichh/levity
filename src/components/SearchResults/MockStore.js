import { configureStore, createSlice } from '@reduxjs/toolkit';

const GitReducer = createSlice({
  name: 'git',
  initialState: {
    repos: [
      {
        active: true,
        name: 'react',
        html_url: 'https://github.com/facebook/react',
        description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
        stargazers_count: 182384,
        topics: ["declarative", "frontend", "javascript", "library", "react", "ui"]
      }
    ],
    repoCount: 5,
    selectedFilters: []
  },
  reducers: {
    setRepos: (state, action) => {
      state.repos = action.payload;
      state.repoCount = 5;
      state.selectedFilters = [];
    }
  }
});

export default configureStore({
  reducer: {
    git: GitReducer.reducer
  }
});
