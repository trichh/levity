// Returns the max number of repositories for a searched user, ordered by the repo's star count
export const searchRepos = (keyword) => {
  return fetch('https://api.github.com/users/' + keyword + '/repos?per_page=100')
    .then(res => res.json())
    .then(response => {
      let repos = response.sort((a, b) => { return b.stargazers_count - a.stargazers_count });
      repos.forEach((repo)=> { repo.active = true });
      return repos;
    })
    .catch(error => alert(error));
};
// Sets the active repositories
export const getActiveRepos = (repos) => {
  return repos.filter((repo) => { return repo.active });
};
