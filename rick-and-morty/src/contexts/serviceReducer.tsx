import { GET_CHARACTERS, SEARCH_CHARACTERS } from './types';

const ServiceReducer = (state: any, action: any) => {
    const {payload, type} = action;
    console.log(action);
    
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: payload,
            }
        case SEARCH_CHARACTERS:
            return { 
                ...state, 
                filter: payload
            }    
        default:
            return state;
    }
}

export default ServiceReducer;