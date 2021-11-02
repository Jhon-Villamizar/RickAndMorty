import { GET_ALL_CHARACTERS, SEARCH_CHARACTERS, UPLOAD_PAGE, DATA_SORT } from './types';

const ServiceReducer = (state: any, action: any) => {
    const {payload, type} = action;

    switch (type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                allCharacters: payload,
            }
        case SEARCH_CHARACTERS:
            return {
                ...state,
                filter: payload
            }
        case UPLOAD_PAGE:
            return {
                ...state,
                page: payload
            }
        case DATA_SORT:
            return {
                ...state,
                sort: payload
            }
        default:
            return state;
    }
}

export default ServiceReducer;
