export default function SearchForm({setSearchWord, setLatestSearches, latestSearches}){
    let tempWord = '';

    function handleChange(e){
        tempWord = e.target.value;
    }

    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
        setSearchWord(tempWord); 

        latestSearches.push(tempWord);
        if(latestSearches.length > 3) latestSearches.shift();
        setLatestSearches(latestSearches);
    }

    return(
        <form className='search-form' onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <button>Search</button>
        </form>
    )
}