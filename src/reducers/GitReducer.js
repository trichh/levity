import { createSlice } from '@reduxjs/toolkit';

export const GitReducer = createSlice({
  name: 'git',
  initialState: {
    repos: [],
    repoCount: 0,
    selectedFilters: []
  },
  reducers: {
    setRepos: (state, action) => {
      state.repos = action.payload;
      state.repoCount = 5;
      state.selectedFilters = [];
    },
    setRepoCount: (state) => {
      state.repoCount += 5;
    },
    selectTopic: (state, action) => {
      state.selectedFilters.push(action.payload.topic);
      state.repos = action.payload.repos;
      state.repoCount = 5;
    },
    removeSelectedTopic: (state, action) => {
      const index = state.selectedFilters.indexOf(action.payload.topic);
      state.selectedFilters.splice(index, 1);
      state.repos = action.payload.repos;
      state.repoCount = 5;
    }
  }
});

export const { setRepos, setRepoCount, selectTopic, removeSelectedTopic } = GitReducer.actions;

export default GitReducer.reducer;
