import { useState } from "react"

export default function Count(){
    const [clicks, setClicks] = useState(0);

    function handleClick(){
        setClicks(clicks+1);
        
        console.log('click');
    }

    return (
        <button onClick={handleClick}>{clicks}</button>
    )
}