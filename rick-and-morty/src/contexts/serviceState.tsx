import React,{ useReducer } from 'react';
import ServiceContext from './serviceContext';
import ServiceReducer from "./serviceReducer";
import { GET_ALL_CHARACTERS, SEARCH_CHARACTERS, UPLOAD_PAGE, DATA_SORT } from './types';

const ServiceState = (props: any) => {
    const initialState = {
        allCharacters: [],
        characters: [],
        info: {},
        filter: '',
        page: 1,
        like: 0,
        dislike: 0,
        sort: null,
    };

    const [state, dispatch] = useReducer(ServiceReducer, initialState);

    const getService = async () => {
        try {
            const res = await fetch(`https://randomuser.me/api/?results=12&format=pretty`);
            const data = await res.json();
            // eslint-disable-next-line array-callback-return
            data.results.map((item: any) => {
              item.flag = false
            })
            dispatch({ type: GET_ALL_CHARACTERS, payload: data.results});
        } catch (error) {
            console.error(error);
        }
    }

    const searchCharacter = (word: string) => {
        dispatch({ type: SEARCH_CHARACTERS, payload: word});
    }

    const paginate = (selected: number) => {
      dispatch({ type: UPLOAD_PAGE, payload: selected})
    }

    const dataSorting = (flag: boolean) => {
      dispatch({ type: DATA_SORT, payload: flag })
    }

    return(
        <ServiceContext.Provider value={{allCharacters: state.allCharacters, filter: state.filter, page: state.page, like: state.like, dislike: state.dislike, sort: state.sort, getService, searchCharacter, paginate, dataSorting}}>
            {props.children}
        </ServiceContext.Provider>
    )
}

export default ServiceState;
