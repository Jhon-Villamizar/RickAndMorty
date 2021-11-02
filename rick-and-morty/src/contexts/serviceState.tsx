import React,{ useReducer } from 'react';
import ServiceContext from './serviceContext';
import ServiceReducer from "./serviceReducer";
import { GET_ALL_CHARACTERS, GET_INFO, SEARCH_CHARACTERS, UPLOAD_PAGE, DATA_SORT } from './types';

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

    const getAllCharacters = async (route: string, allData: any) => {
      try {
        const res = await fetch(route);
        const data = await res.json();
        data.results.map((item: any):any => {
          item.like = 0;
          item.dislike = 0;
          allData.push(item);
        });

          if (data.info.next) {
            getAllCharacters(data.info.next, allData);
          } else {
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
            dispatch({ type: GET_INFO, payload: data.info});
            data.results.map((item: any) => {
              item.like = 0;
              item.dislike = 0;
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

    const dataSorting = (flag: boolean) => {
      dispatch({ type: DATA_SORT, payload: flag })
    }



    return(
        <ServiceContext.Provider value={{allCharacters: state.allCharacters, info: state.info, filter: state.filter, page: state.page, like: state.like, dislike: state.dislike, sort: state.sort, getService, searchCharacter, paginate, dataSorting}}>
            {props.children}
        </ServiceContext.Provider>
    )
}

export default ServiceState;
