import { useState, useEffect} from "react";
import { httpClient } from "../api/httpClient";
import { Pokemon } from "../api/PokemonType";

const usePokemon = (id: string) => {
    const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
    const getPokemon = async () => {
        const response = await httpClient.get<Pokemon>(`$[id]`);
    }
}

export default usePokemon;