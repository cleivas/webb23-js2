import { useState } from "react";

export default function Form(){
    const [text, setText] = useState('DEFAULT');
    let tempText = '';

    function handleChange(event){
        tempText = event.target.value;
    }
    function handleSubmit(event){
        event.preventDefault();
        event.target.reset();
        console.log(tempText);

        setText(tempText);
    }
    return(
        <>
            <form onSubmit={ handleSubmit }>
                <input onChange={ handleChange} type="text" />
                <button>Change text</button>
            </form>
            <h1>{text}</h1>
        </>
    )
}