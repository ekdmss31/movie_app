import styles from "./Point.module.css";
function Point({
  id,
  bg_img,
  medium_cover_image,
  title_long,
  genres,
  rating,
  runtime,
  description_full,
}) {
  return (
    <div>
      <img className={styles.movie__bg} src={bg_img} />
      {/* <div className={styles.movie__home}>
        <Link to="/">Home</Link>
      </div> */}
      <div className={styles.movie__show}>
        <img
          className={styles.movie__img}
          src={medium_cover_image}
          alt={title_long}
        />
        <div className={styles.movie__textbox}>
          <h2 className={styles.movie__title}>{title_long}</h2>
          <ul>
            <li>rating : {rating}</li>
            <li>runtime : {runtime}</li>
            <li>
              Genre
              <ul>
                {genres && genres.map((genre) => <li key={genre}>{genre}</li>)}
              </ul>
            </li>
            <li>{description_full}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Point;
