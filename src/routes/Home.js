import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  //const { num } = useParams();
  //const [nums, setNums] = useState([...Array(10)].map((_, i) => i + +num)); //10번 반복하는데, index(i)를 이용하여 1부터 10까지 들어가도록.
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  //const [reloading, setReloading] = useState(false);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    //const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  /*
  useEffect(() => {
    setReloading(false);
    setLoading(true);
    getMovies();
  }, [reloading]);
  */
  //useEffect(() => {}, [nums]); //nums이 불릴 때 한번만 실행

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies &&
            movies.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Movie
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  year={movie.year}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              </Link>
            ))}
        </div>
      )}

      {/* <div>
        {nums.map((num) => {
          console.log(num);
          return (
            <Link to={`/page/${num}`} onClick={() => setReloading(true)}>
              {num}
            </Link>
          );
        })}
      </div> */}
    </div>
  );
}
export default Home;
