import { Link } from "react-router-dom";

function Footer({ num }) {
  return (
    <li>
      <Link to={`page/${num}`}>{num}</Link>
    </li>
  );
}
