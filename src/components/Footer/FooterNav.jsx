import { Link } from "react-router";

export default function FooterNav() {
  return (
    <div className="footer-nav">
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/legals">Legals</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
