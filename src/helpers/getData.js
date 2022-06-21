const getData = async ({ keyword = "batman" }) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=x2e9mKnmAqDosgqvpGF7uSyBUpz9HbGZ&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  const response = await fetch(URL);
  const { data = [] } = await response.json();
  const gifs = data.map((image) => {
    const { images, title, id } = image;
    const { url } = images.downsized_still;
    return { title, id, url };
  });
  return gifs;
};
``;

export default getData;
