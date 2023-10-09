
 export default function MovieCard({title, year, description}){
    return(
        <div className='movie'>
            <h1>{title}</h1>
            <h4>{year}</h4>
            <p>{description}</p>
        </div>
    )
}