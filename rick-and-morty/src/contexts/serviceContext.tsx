import { createContext } from 'react';

interface context {
    allCharacters: any,
    filter: string,
    page: number,
    like: number,
    dislike: number,
    sort: boolean,
    getService(): any,
    searchCharacter(word:string): any,
    paginate(page:number): any,
    dataSorting(flag: boolean): any,
}

const ServiceContext = createContext({} as context);

export default ServiceContext;
