export default function BreedBtn({breed, setBreed}){
    function handleClick(e){
        setBreed(e.target.innerText);
    }
    return(
        <button onClick={handleClick}>{breed}</button>
    )
}