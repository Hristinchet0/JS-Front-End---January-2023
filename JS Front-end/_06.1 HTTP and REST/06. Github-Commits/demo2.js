async function loadCommits() {
    // Try it with Fetch API
    const BASE_URL = 'https://api.github.com/repos/';
    const user = document.getElementById('username');
    const repo = document.getElementById('repo');
    const commits = document.getElementById('commits');
    const usernameValue = username.value;
    const repoValue = repo.value;


    try {
        const allCommitsRes = await fetch(BASE_URL + usernameValue + '/' + repoValue + '/commits');
        const data = await allCommitsRes.json();
        data.forEach(({commit}) => {
            const li = document.createElement('li');
            li.textContent = `${commit.author.name}: ${commit.message}`;
            commits.appendChild(li);
            })
    } catch (err) {
        const li = document.createElement('li');
        li.textContent = err.message;
        commits.appendChild(li);
    }

}