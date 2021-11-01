import { createContext } from 'react';

interface context {
    characters: any,
    allCharacters: any,
    filter: string,
    info: any,
    page: number,
    getService(): any,
    searchCharacter(word:string): any,
    uploadPage(page:number): any,
    paginate(page:number): any,
}

const ServiceContext = createContext({} as context);

export default ServiceContext;
