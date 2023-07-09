const idAtributos = [
  'name',
  'login',
  'bio',
  'avatar_url',
  'blog',
  'location',
  'company',
  'twitter_username',
  'url',
  'repos_url',
  'twitter_username',
  'public_repos',
  'followers',
  'following',
]

const repos_url = [
  'name',
  'description',
  'html_url',
  'language',
  'created_at',
  'updated_at',
  'stargazers_count',
  'forks_count',
  'open_issues_count',
  'license',
  
]

async function getUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

function defineValue(id, value) {
  const atributo = document.getElementById(id);
  if (id === 'avatar_url') {
    atributo.setAttribute('src', value);
  } else {
    atributo.innerHTML = value;
  }
}

function defineAtributos(data) {
  idAtributos.forEach(id => {
    defineValue(id, data[id]);
  });
}

getUser('castelogui')
  .then(data => {
    defineAtributos(data);
  })
  .catch(error => {
    console.error(error);
  });
