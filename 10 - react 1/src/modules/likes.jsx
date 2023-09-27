export function Likes(){

    const likes = ['Water', 'Treudd', 'Fisk', 'Sirens'];

    // const liArray = likes.map( like =>{
    //     console.log(like);
    //     return <li>{like}</li>
    // })

    const liArray = likes.map( like => <li>{like}</li> );

    console.log(liArray);

    return(
        <ul>
            {liArray}
        </ul>
    )

}