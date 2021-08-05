export const getGifs = async ( category ) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${ apiKey }`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(( gif ) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized.url
        }
    });
    return gifs;
};