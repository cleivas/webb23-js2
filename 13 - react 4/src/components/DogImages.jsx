import {useState, useEffect} from 'react';

export default function DogImages(){
    const [dogImage, setDogImage] = useState([]);
    // const [breed, setBreed] = useState('poodle');
    const [dogSearch, setDogSearch] = useState({
        breed: 'poodle',
        amount: 5
    })
    const [isOK, setIsOK] = useState(false);

    // console.log(dogSearch.breed);

    // Lägg till så att man kan ange antal bilder i formet
    async function getDogImage(){
        const apiUrl = `https://dog.ceo/api/breed/${dogSearch.breed}/images/random/${dogSearch.amount}`
        const res = await fetch(apiUrl);
        const data = await res.json();

        console.log(typeof data.message);
        if(typeof data.message == 'string'){
            console.log('error')
            setIsOK(false);
        }
        else{
            console.log('ok')
            setIsOK(true);
            setDogImage(data.message);
        }
    }

    useEffect(()=>{
        getDogImage();
    }, [dogSearch])

    // getDogImage();

    return(
        <div>
            <Form setDogSearch={setDogSearch}/>
            {isOK ? dogImage.map( url => <Image key={url} imgUrl={url} />) : <Error/>}
            
        </div>
    )
}

function Error(){
    return(
        <div>
            <h1>Något gick fel... försök igen.</h1>
        </div>
    )
}

function Form({setDogSearch}){
    let tempBreed = '';
    let tempAmount = 0;

    function handleChangeBreed(e){
        tempBreed = e.target.value;
    }
    function handleChangeAmount(e){
        tempAmount = e.target.value;
    }
    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
        setDogSearch({
            breed: tempBreed,
            amount: tempAmount
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Breed' onChange={handleChangeBreed}/>
            <input type="number" onChange={handleChangeAmount}/>
            <button>Search</button>
        </form>
    )
}

function Image({imgUrl}){
    return(
        <img src={imgUrl}/>
    )
}