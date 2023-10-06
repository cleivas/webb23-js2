import { useState, useRef } from "react";

export default function GuessNumber(){
    const random = useRef(getRandom()); //random är nu en ref eftersom dess värde  aldrig behöver renderas
    console.log(random);

    const [guess, setGuess] = useState(0);
    const [counter, setCounter] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);

    let tempGuess = 0;

    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
        // console.log(random, tempGuess);
        if(random.current==tempGuess){
            setIsCorrect(true);
            console.log(isCorrect);
            random.current = getRandom();
        }
        else{
            setIsCorrect(false);
        }

        // Fungerar eftersom states uppdateras sist av allt 
        if(isCorrect) setCounter(1);
        else setCounter(counter+1)

        setGuess(tempGuess);
    }
    function handleChange(e){
        tempGuess = e.target.value;
    }

    function getRandom(){
        return Math.ceil(Math.random()*100);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" onChange={handleChange}/>
                <button>Guess!</button>
            </form>
            <Result guess={guess} count={counter} isCorrect={isCorrect}/>
        </div>
    )
}

function Result({guess, count, isCorrect}){
    let message;
    let cssClass;
    if(isCorrect){ 
        message = 'är rätt!';
        cssClass = 'correct';
    }
    else {
        message = 'är fel.';
        cssClass= 'wrong';
    }


    return(
        <div className={cssClass} >
            <p>{guess} {message}</p>
            <p>Antal gissningar: {count}</p>
        </div>
    )
}