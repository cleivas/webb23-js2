import '../css/App.css'
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard'
import SearchContainer from './SearchContainer';
import Loading from './Loading';
import Error from './Error';

export default function App() {
    const [status, setStatus] = useState('ok');
    const [movies, setMovies] = useState([]);
    const [searchWord, setSearchWord] = useState('dragon');

    async function getMovies() {
        setStatus('loading');

        const apiUrl = `http://localhost:3000/movies?title=${searchWord}`;

        try {
            const res = await fetch(apiUrl);
            const data = await res.json();

            if (data.length === 0) {
                throw 'Error';
            }
            else {
                setMovies(data);
                setStatus('ok');
            }
        }
        catch (error) {
            console.log(error);
            setStatus('error');
        }
    }

    useEffect(() => {
        getMovies();
    }, [searchWord])

    return (
        <>
            <SearchContainer setSearchWord={setSearchWord}/>
            {status === 'loading' && <Loading />}
            {status === 'error' && <Error />}

            {status === 'ok' && <div className='movie-container'>
                {movies.map(movie => <MovieCard key={movie.id} title={movie.name} year={movie.year} description={movie.storyline} />)}
            </div>}

        </>
    )
}