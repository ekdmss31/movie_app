import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

function Detail() {
  //const x = useParams();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  //console.log(id);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      <Link to="/">Home</Link>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title_long} />
          <h2>{movie.title_long}</h2>
          <ul>
            {movie.genres &&
              movie.genres.map((genre) => <li key={movie.genre}>{genre}</li>)}
          </ul>
          <p>평점 : {movie.rating}</p>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
