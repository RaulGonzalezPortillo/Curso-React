import React from 'react'
import usePokemon from '../hooks/usePokemon'

export const PokemonCard = () => {
const pokemon = usePokemon(1);
console.log(pokemon)
    return (
        <div className="flip-card">
            <div className="card-container">
                <div className="pokemon-block">
                    <div className="sprite-container">
                        <img
                            src={pokemon?.sprites.front_default}
                            alt="Sprite del pokémon"/>
                    </div>
                    <p>
                        {`#${pokemon?.id.toString().padStart(3, '0')}`}
                    </p>
                    <p className="name">
                        {pokemon?.name}
                    </p>
                </div>
                <div className="pokemon-block-back">
                    { pokemon?.stats[0] }
                </div>
            </div>
        </div>
    )
}
