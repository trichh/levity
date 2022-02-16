import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';

import { searchRepos } from '../../helpers';
import { setRepos } from '../../reducers/GitReducer';

import { IoIosSearch } from "react-icons/io";

import './Search.css';

const Search = () => {
  const dispatch = useDispatch();

  const submitSearch = useDebouncedCallback((keyword) => {
    (keyword.length > 0) ? searchRepos(keyword).then(response => dispatch(setRepos(response))) : dispatch(setRepos([]));
  }, 1500);

  return (
    <div className="search">
      <h1>Search For Repositories</h1>
      <div className="searchInput">
        <IoIosSearch color="#9EA0A4" size="1.5em" />
        <input type='text' name='keyword' placeholder='Search by Username' defaultValue='' onChange={e => submitSearch(e.target.value)} />
      </div>
    </div>
  )
}

export default Search;
