import LatestSearches from "./LatestSearches";
import { useState } from "react";
import SearchForm from "./SearchForm";

export default function SearchContainer({setSearchWord}){
    const [latestSearches, setLatestSearches] = useState([1, 2, 3]);

    return(
        <div>
            <SearchForm setSearchWord={setSearchWord} setLatestSearches={setLatestSearches} latestSearches={latestSearches}/>
            <LatestSearches latestSearches={latestSearches} setSearchWord={setSearchWord}/>
        </div>
    )
}