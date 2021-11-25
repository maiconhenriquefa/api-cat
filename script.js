async function requisicao(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json[0].url;
}

const button = document.querySelector('button');

async function handleClick() {
  const img = document.querySelector('#photo');
  img.innerHTML = `<img id='img-cat' src="${await requisicao(
    'https://api.thecatapi.com/v1/images/search',
  )}">`;
}

button.addEventListener('click', handleClick);
