import Count from "./Count"
import GuessNumber from "./GuessNumber";

export default function App(){
    const counters = [];
    for(let i=0; i<50; i++){
        counters.push(<Count/>);
    }

    return (
        <>
            {/* {counters} */}
            <GuessNumber/>
        </>
    )
}