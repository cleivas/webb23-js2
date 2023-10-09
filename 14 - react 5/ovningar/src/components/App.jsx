import { useState, useEffect } from "react";
import DogImage from "./DogImage";
import BreedBtn from "./BreedBtn";
// import Button from "./Button"
// import OnOff from "./OnOff"

export default function App() {
    // const [onOff, setOnOff] = useState('OFF');
    const [imgUrl, setImgUrl] = useState('');
    const [breed, setBreed] = useState('husky');

    async function getDogImage(){
        const apiUrl = `https://dog.ceo/api/breed/${breed}/images/random`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        setImgUrl(data.message);
    }

    useEffect(()=>{
        getDogImage();
    }, [breed])

    return (
        <>
            <BreedBtn breed={'husky'} setBreed={setBreed}/>
            <BreedBtn breed={'poodle'} setBreed={setBreed}/>
            <BreedBtn breed={'akita'} setBreed={setBreed}/>
            <DogImage imgUrl={imgUrl}/>
            {/* <OnOff onOffText={onOff}/>
            <Button text={'ON'} setOnOff={setOnOff}/>
            <Button text={'OFF'} setOnOff={setOnOff}/> */}
        </>
    )
}