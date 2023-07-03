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
  atributo.innerHTML = value;
}

function defineAtributos(data) { 
  defineValue('name', data.name);
}

getUser('castelogui')
  .then(data => {
    defineAtributos(data);
  })
  .catch(error => {
    console.error(error);
  });
