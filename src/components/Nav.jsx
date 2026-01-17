import { NavLink } from "react-router";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </div>
  );
}
