import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetch = ( query ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs( query ).then( ( gifs ) => {
            setState({
                data: gifs,
                loading: false
            });
        });
    }, [query]);

    return state;
}
