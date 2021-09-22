import { useState, useEffect, useCallback} from "react";
import { httpClient } from "../api/httpClient";
import { Pokemon } from "../api/PokemonType";

const usePokemon = (id: string | number) => {
    const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

    const getPokemonMemoized = useCallback(() => {
        const getPokemon = async () => {
            const response = await httpClient.get<Pokemon>(`${id}`);
            const { data: newPokemon } = response;
            setPokemon(newPokemon);
        }
        getPokemon()
    }, [id]);

    useEffect(() => {
        getPokemonMemoized()
    }, [getPokemonMemoized]);

    return pokemon;
}

export default usePokemon;