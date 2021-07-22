const pokemonContainer = document.querySelector('.pokemon-container');
const spinner = document.querySelector('#spinner');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

let offset = 1;
let limit = 8;

previous.addEventListener('click', () => {
    if(offset != 1) {
        offset -= 9;
        removeChildNodes(pokemonContainer);
        fetchPokemons(offset, limit);
    }
});

next.addEventListener('click', () => {
    offset += 9;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
});

const fetchPokemon = async (id) => {
    /*
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((answer) => answer.json())
    .then((data) => console.log(data));*/
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await resp.json();
    createPokemon(data);
    spinner.style.display = 'none';
}

const fetchPokemons = (offset, limit) => {
    spinner.style.display = 'block';
    const total = offset + limit;
    for(let i = offset; i <= total; i++) {
        fetchPokemon(i);
    }
}

const createPokemon = (pokemon) => {
    /*Creamos un elemento div para las tarjetas*/
    const flipCard = document.createElement('div');
    /*Le añadimos una clase CSS 'flip-card*/
    flipCard.classList.add('flip-card');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const card = document.createElement('div');
    card.classList.add('pokemon-block');
    
    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${ pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('p');
    name.classList.add('pokemon-name');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    /*Agrega el contenido a la parte de atrás:*/
    const cardBack = document.createElement('div');
    cardBack.classList.add('pokemon-block-back');
    cardBack.appendChild(progressBars(pokemon.stats));

    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    
    flipCard.appendChild(cardContainer);

    pokemonContainer.appendChild(flipCard);
}

const progressBars = (stats) => {
    const statsContainer = document.createElement('div');
    statsContainer.classList.add('stats-container');

    for(let i = 0; i < 3; i++) {
        const stat = stats[i];
        const statPercent = (stat.base_stat / 2.55) + '%';
        const statContainer = document.createElement('div');
        statContainer.classList.add('stat-container');

        const statName = document.createElement('p');
        statName.textContent = stat.stat.name;

        const progress = document.createElement('div');
        progress.classList.add('progress');

        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.setAttribute('aria-valuenow', stat.base_stat);
        progressBar.setAttribute('aria-valuemin', 0);
        progressBar.setAttribute('aria-valuemax', 255);
        progressBar.style.width = statPercent;
        progressBar.textContent = stat.base_stat;

        progress.appendChild(progressBar);
        statContainer.appendChild(statName);
        statContainer.appendChild(progress);
        statsContainer.appendChild(statContainer);
    }

    return statsContainer;
}

const removeChildNodes = (parent) => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

fetchPokemons(offset, limit);