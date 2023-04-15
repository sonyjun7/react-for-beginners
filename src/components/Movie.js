
import propTypes from "prop-types";
import {
    Link,
} from "react-router-dom";

function Movie({id, mImage, title, rating, summary, genres}){

    return(
        <div>
            <div key={id}>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <img src={mImage} />
                <h3>{rating}</h3>
                <ul>
                    {genres.map((e) => (
                        <li key={e}>{e}</li>
                    ))}
                </ul> 
                <p>{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    mImage: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    rating: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;