import { Score } from "./Score"
import Button from "./Button"
import Form from "./Form"

export default function App(){

    const highscoreList = [
        { name: 'Clara', score: 9000},
        { name: 'Merva', score: 8000},
        { name: 'Erik', score: 7000},
        { name: 'Eleni', score: 6000},
        { name: 'Li', score: 5000},
    ]

    return (
        <>
            <Form/>
            
            <Button/>

            {highscoreList.map( hsO => {
                // console.log(hsO);
                return <Score name={hsO.name} score={hsO.score}/>
            })}
        </>
    )
} 