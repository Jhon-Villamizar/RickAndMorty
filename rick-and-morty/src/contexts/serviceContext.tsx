import { createContext } from 'react';

interface context {
    characters: any,
    filter: string,
    getService(): any,
    searchCharacter(word:string): any
}

const ServiceContext = createContext({} as context);

export default ServiceContext;
