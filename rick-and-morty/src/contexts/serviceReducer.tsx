import { GET_ALL_CHARACTERS, GET_CHARACTERS, GET_INFO, SEARCH_CHARACTERS, UPLOAD_PAGE } from './types';

const ServiceReducer = (state: any, action: any) => {
    const {payload, type} = action;

    switch (type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                allCharacters: payload,
            }
        case GET_CHARACTERS:
            return {
                ...state,
                characters: payload,
            }
        case GET_INFO:
            return {
                ...state,
                info: payload,
            }
        case SEARCH_CHARACTERS:
            return {
                ...state,
                filter: payload
            }
        case UPLOAD_PAGE:
          console.log(state);

            return {
                ...state,
                page: payload
            }
        default:
            return state;
    }
}

export default ServiceReducer;
