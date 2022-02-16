import { useSelector, useDispatch } from 'react-redux';

import { getActiveRepos } from '../../helpers';
import { setRepoCount } from '../../reducers/GitReducer';

import { IoIosStar } from "react-icons/io";
import Filter from '../Filter/Filter';

import './Repo.css';

const Repo = (props) => {
  const repos = useSelector((state) => state.git.repos);
  const repoCount = useSelector((state) => state.git.repoCount);
  const selectedFilters = useSelector((state) => state.git.selectedFilters);
  const activeRepos = getActiveRepos(repos);
  const dispatch = useDispatch();

  return (
    <div className="repo">
      <h1><a href={props.repo.html_url} target="_blank">{props.repo.name}</a></h1>
      <p>{props.repo.description}</p>
      <div className="filterWrapper">
        { selectedFilters.map((value, iteration) => (selectedFilters.length > 0 && props.repo.topics.includes(value)) ? <Filter filter={value} filterType={'selected'} key={iteration} /> : null) }
        { props.repo.topics.map((value, iteration) => (props.repo.topics.length > 0 && !selectedFilters.includes(value)) ? <Filter filter={value} filterType={'unselected'} key={iteration} /> : null) }
      </div>
      <IoIosStar color="#0272C2" size="1.1rem" />
      <span>{props.repo.stargazers_count.toLocaleString('en')}</span>
      { (props.iteration + 1 === activeRepos.slice(0, repoCount).length && activeRepos.slice(0, repoCount).length % 5 === 0 && props.iteration + 1 !== activeRepos.length) ? <div className="loadMore"><p onClick={() => dispatch(setRepoCount())}>Load More</p></div> : null }
    </div>
  )
}

export default Repo;
