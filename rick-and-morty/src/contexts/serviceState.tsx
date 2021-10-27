import React,{ useReducer } from 'react';
import ServiceContext from './serviceContext';
import ServiceReducer from "./serviceReducer";
import { GET_CHARACTERS, SEARCH_CHARACTERS } from './types';

const ServiceState = (props: any) => {
    const initialState = {
        characters: [],
        filter: '',
    };

    const [state, dispatch] = useReducer(ServiceReducer, initialState);

    const getService = async () => {
        try {
            const res = await fetch('https://rickandmortyapi.com/api/character');
            const data = await res.json();            
            dispatch({ type: GET_CHARACTERS, payload: data.results});
        } catch (error) {
            console.error(error);
        }
    }

    const searchCharacter = (word: string) => {
        console.log(word);
        dispatch({ type: SEARCH_CHARACTERS, payload: word});
    }

    return(
        <ServiceContext.Provider value={{characters: state.characters, filter: state.filter, getService, searchCharacter}}>
            {props.children}
        </ServiceContext.Provider>
    )
}

export default ServiceState;