import { useState } from 'react';
import _, {map} from 'underscore';

export default function Key(){
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
    function handleClick(){
        setNumbers( _.shuffle(numbers) );
    }
    
    return(
        <div>
            { numbers.map( n => <Number key={n} text={n} /> ) }
            <br />
            <button onClick={handleClick} >Shuffle</button>
        </div>
    )
}

function Number({text}){

    return <>
        <i>{text + ' '}</i>
    </>
}