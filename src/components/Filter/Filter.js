import { useSelector, useDispatch } from 'react-redux';

import { selectTopic, removeSelectedTopic } from '../../reducers/GitReducer';

import './Filter.css';

const Filter = (props) => {
  const repos = useSelector((state) => state.git.repos);
  const selectedFilters = useSelector((state) => state.git.selectedFilters);
  const dispatch = useDispatch();

  const addFilter = (topic) => {
    let filteredRepos = JSON.parse(JSON.stringify(repos));
    filteredRepos.forEach((repo)=> { (!repo.topics.includes(topic)) ? repo.active = false : null });
    dispatch(selectTopic({
      topic: topic,
      repos: filteredRepos
    }));
  }
  const removeFilter = (topic) => {
    let filteredRepos = JSON.parse(JSON.stringify(repos));
    filteredRepos.forEach((repo)=> { (!repo.topics.includes(topic)) ? (selectedFilters.length !== 1) ? selectedFilters.forEach((filter)=> { (repo.topics.includes(filter)) ? repo.active = true : null }) : repo.active = true : null });
    dispatch(removeSelectedTopic({
      topic: topic,
      repos: filteredRepos
    }));
  }

  return (
    <div className={ (props.filterType === 'unselected') ? 'filter' : 'selectedFilter' }>
      <p onClick={() => (props.filterType === 'unselected') ? addFilter(props.filter) : removeFilter(props.filter)}>{props.filter}</p>
    </div>
  )
}

export default Filter;
