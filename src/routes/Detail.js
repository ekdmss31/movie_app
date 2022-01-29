import { useParams, useEffect, Link } from "react-router-dom";

function Detail() {
  //const x = useParams();
  const { id } = useParams();

  //console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Detail</h1>
    </div>
  );
}
export default Detail;
