import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
function Nav() {
  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.title}>
          <Link to="/react-movie">
            <i class="fab fa-dochub"></i>
            <strong>EFLEX</strong>
          </Link>
        </div>
        <ul className={styles.icon__list}>
          <li>
            <a href="https://twitter.com/?lang=ko" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.null}></div>
    </div>
  );
}
export default Nav;
