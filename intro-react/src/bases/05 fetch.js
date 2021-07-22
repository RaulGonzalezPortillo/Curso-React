const apiKey = 'gD1NvRYsuhPLecoSqzLMvlB0TRImVrVv';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
const request = fetch(url);

request
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    //.catch((e) => console.warn(e));
    .catch(console.warn);