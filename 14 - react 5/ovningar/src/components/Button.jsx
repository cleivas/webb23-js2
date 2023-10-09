export default function Button({text, setOnOff}){

    function handleClick(e){
        // console.log(e.target.innerText);
        setOnOff(e.target.innerText)
    }

    return(
        <button onClick={handleClick}>{text}</button>
    )
}