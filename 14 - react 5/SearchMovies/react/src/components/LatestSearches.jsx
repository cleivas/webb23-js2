export default function LatestSearches({latestSearches, setSearchWord}){

    function handleClick(e){
        if(e.target.tagName === 'P'){
            console.log(e.target.innerText);
            setSearchWord(e.target.innerText);
        }
    }

    return(
        <div className='latest-searches' onClick={handleClick}>
            <p>{latestSearches[0]}</p>
            <p>{latestSearches[1]}</p>
            <p>{latestSearches[2]}</p>
        </div>
    )
}