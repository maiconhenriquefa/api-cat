async function requisicao(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
requisicao('https://api.thecatapi.com/v1/images/search');
