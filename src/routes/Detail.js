import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Point from "../components/Point";
import styles from "./Home.module.css";

function Detail() {
  //const x = useParams();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  //console.log(id);
  /*
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  */
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <Point
            key={movie.id}
            bg_img={movie.background_image_original}
            medium_cover_image={movie.medium_cover_image}
            title_long={movie.title_long}
            genres={movie.genres}
            rating={movie.rating}
            runtime={movie.runtime}
            description_full={movie.description_full}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
