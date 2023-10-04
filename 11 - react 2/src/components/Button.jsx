import { useState } from "react";

export default function Button(){
    const d = 'default';

    const [cssClass, setCssClass] = useState('');
    const [btnText, setBtnText] = useState(d);
    // console.log(cssClass, setCssClass);

    function handleClick(){
        console.log('Klick!')
    }
    function handleEnter(){
        setCssClass('bg-blue');
        setBtnText('enter');
        // console.log('Enter')
    }
    function handleLeave(){
        setCssClass('');
        setBtnText('default');
        // console.log('leave');
    }
    return (
        <button onClick={ handleClick } 
        onMouseEnter={handleEnter} 
        onMouseLeave={handleLeave} 
        className={cssClass}>{btnText}</button>
    )
}