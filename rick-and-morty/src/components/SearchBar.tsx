import { useContext, useEffect, useState } from "react";
import ServiceContext from "../contexts/serviceContext";

const SearchBar = () => {
    const service = useContext(ServiceContext);
    const [query, setQuery] = useState('');

    useEffect(() => {
        service.searchCharacter(query);
    },[query])
    return (
        <div className="search-bar">
            <div className="search-content">
                <div className="search-input">
                    <input type="text" onChange={(event)=>setQuery(event.target.value.toLocaleLowerCase())}/>
                </div>
                <div className="search-filters">
                    <button>sort</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;