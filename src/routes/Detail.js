import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const [details, setDetails] =  useState();
    const [loading, setLoading] = useState(true);

    const {id} = useParams();    // 파라미터명인 id로 받음 "중괄호안에 명"
    // console.log(id);
    const getData = async() =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setDetails(json.data.movie);
        setLoading(false);
        console.log(json.data.movie.genres);
    }
    useEffect(()=>{
        getData();
    },[]);

    return (
        <div>{loading ? (<h2>...LOADING</h2>) :(
            <div>
                <h2>{details.title}</h2>
                <img src={details.large_cover_image} />
                <ul>
                    {details.genres.map((e) => (
                        <li>{e}</li>
                    ))}
                </ul>
                <p>{details.description_intro}</p>
            </div>
        )}</div>
    );
}

export default Detail;