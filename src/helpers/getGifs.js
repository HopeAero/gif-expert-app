export const getGifs = async (category) => {
  const api = process.env.REACT_APP_API_BASE_URL;

  const url = `http://api.giphy.com/v1/gifs/search?api_key=${api}&limit=10&q={${encodeURI(
    category
  )}}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
