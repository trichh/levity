import { useSelector } from 'react-redux';

import { getActiveRepos } from '../../helpers';

import Repo from '../Repo/Repo';

import './SearchResults.css';

const SearchResults = () => {
  const repos = useSelector((state) => state.git.repos);
  const repoCount = useSelector((state) => state.git.repoCount);
  const activeRepos = getActiveRepos(repos);

  return (
    <div className="searchResults">
      { (activeRepos.length > 0) ? activeRepos.slice(0, repoCount).map((value, iteration) =>
          <Repo iteration={iteration} repo={value} key={iteration} />
        ) : <div className="repo">
          <p>No Repositories Found</p>
        </div>
      }
    </div>
  )
}

export default SearchResults;
