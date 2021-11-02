import { useContext, useEffect, useState } from "react";
import ServiceContext from "../contexts/serviceContext";

const SearchBar = () => {
    const service = useContext(ServiceContext);
    const [query, setQuery] = useState('');

    useEffect(() => {
        service.searchCharacter(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query]);

    const sortFlag = ():any => {
      if (service.sort=== null) {
        service.dataSorting(true);
        console.log(service.sort);
      }

      if(service.sort){
        service.dataSorting(false);
        console.log(service.sort);

      } else {
        service.dataSorting(true);
        console.log(service.sort);

      }
    }

    return (
        <div className="search-bar">
            <div className="search-content">
                <div className="search-input">
                    <p>Seach Characters: </p>
                    <input type="text" onChange={(event)=>setQuery(event.target.value.toLocaleLowerCase())}/>
                    <a href="javascript;" className={service.filter? 'button':'button--none'} onClick={()=>setQuery('')}>x</a>
                </div>
                <div className="search-sort">
                  <p>Sort: </p>
                  <button onClick={() => sortFlag()} className={service.sort? 'desc': ''}>{!service.sort? 'Desc': 'Asc'}<i className="fas fa-sort-down"></i></button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
