import { createRoot } from "react-dom/client";
import { Welcome } from "./modules/welcome";
import { Profilepic } from "./modules/profilepic";
import { Likes } from "./modules/likes";

function App(){
    return (
        <>
            <Profilepic/>
            <Welcome/>
            <Likes/>
        </>
    )
}


const root = createRoot(document.querySelector('#root'));
root.render(<App/>);