const getASyncAwaitGif = async () => {
    try {
        const apiKey = 'gD1NvRYsuhPLecoSqzLMvlB0TRImVrVv';
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        const {url:urlGif} = data.images.original;
        const img = document.createElement('img');

        img.src=urlGif;
        document.body.append(img);
    } catch (error) {
        console.warn(error);
    }
}

getASyncAwaitGif();