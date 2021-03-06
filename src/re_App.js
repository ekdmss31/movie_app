import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false); // 로딩이 끝난 후 false
      });
  }, []); //dependency : X
  console.log(movies);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default App;
