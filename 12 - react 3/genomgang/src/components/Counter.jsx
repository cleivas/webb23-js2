import {useState} from 'react'

export default function Counter(){
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <ShowCount counter={counter}/>
            <CountUp setCounter={setCounter} counter={counter}/>
        </div>
    )
}

function ShowCount({counter}){
    return <p>{counter}</p>
}

function CountUp({setCounter, counter}){
    function handleClick(){
        setCounter(counter+1);
    }

    return <button onClick={handleClick}>Count</button>
}