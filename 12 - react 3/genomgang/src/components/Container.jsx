import {useState} from 'react'
export default function Container(){
    const [cssClass, setCssClass] = useState('');
    
    return(
        <div className={cssClass}>
            { cssClass !== 'skyblue' && <Button color='skyblue' changeColor={setCssClass}/>} 

            {cssClass !== 'hotpink' && <Button color='hotpink' changeColor={setCssClass}/>}

            {cssClass !== 'violet' && <Button color='violet' changeColor={setCssClass}/>}
        </div>
    )
}

function Button({color, changeColor}){
    function handleClick(){
        changeColor(color)
    }
    return(
        <button onClick={handleClick}>{color}</button>
    )
}