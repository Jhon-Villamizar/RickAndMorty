import React,{ useReducer } from 'react';
import ServiceContext from './serviceContext';
import ServiceReducer from "./serviceReducer";
import { GET_ALL_CHARACTERS, GET_CHARACTERS, GET_INFO, SEARCH_CHARACTERS, UPLOAD_PAGE } from './types';

const ServiceState = (props: any) => {
    const initialState = {
        allCharacters: [],
        characters: [],
        info: {},
        filter: '',
        page: 1,
    };

    const [state, dispatch] = useReducer(ServiceReducer, initialState);

    const getAllCharacters = async (route: string, allData: any) => {
      try {
        const res = await fetch(route);
        const data = await res.json();
        data.results.map((item: any):any => {
          allData.push(item);
        });

          if (data.info.next) {
            getAllCharacters(data.info.next, allData);
          } else {
            console.log('fin');
            dispatch({ type: GET_ALL_CHARACTERS, payload: allData});
          }
    } catch (error) {
        console.error(error);
    }
    }

    const getService = async () => {
      let allData:any[] = [];
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?page=1`);
            const data = await res.json();
            dispatch({ type: GET_CHARACTERS, payload: data.results});
            dispatch({ type: GET_INFO, payload: data.info});
            data.results.map((item: any) => {
              allData.push(item);
            });
            if (data.info.next) {
              getAllCharacters(data.info.next, allData);
            }
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
    const uploadPage = async (page: number) => {
    //   console.log(state);

    //   try {
    //     const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    //     const data = await res.json();
    //     dispatch({ type: GET_CHARACTERS, payload: data.results});
    //     dispatch({ type: GET_INFO, payload: data.info});
    // } catch (error) {
    //     console.error(error);
    // }
    }

    return(
        <ServiceContext.Provider value={{allCharacters: state.allCharacters, characters: state.characters, info: state.info, filter: state.filter, page: state.page, getService, searchCharacter, uploadPage, paginate}}>
            {props.children}
        </ServiceContext.Provider>
    )
}

export default ServiceState;
