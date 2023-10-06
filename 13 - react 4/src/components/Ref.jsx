import { useRef } from "react"

export default function Ref(){
    const counter = useRef(0);
    console.log('New render ', counter);

    function handleClick(){
        counter.current++;
        
        console.log(counter);
        alert(counter.current);
    }

    return(
        <button onClick={handleClick}>Count ref</button>
    )
}