import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=year");

        const json = await response.json();
        // console.log(json);
        setMovies(json.data.movies);
        setLoading(false);
    }
    
    useEffect(()=> {
        // fetch(
        //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
        // ).then((response) => response.json())
        // .then((json => console.log(json)));

        getMovies();
    }, []);

    return(
        <div>
            {loading ? <h1>...LOADING</h1> : (
                <div>
                    {movies.map((movie) => 
                        <Movie
                            id={movie.id}
                            mImage={movie.medium_cover_image}
                            title={movie.title}
                            rating={movie.rating}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    )}
                </div>
            )}
        </div>
    )
}

export default Home;