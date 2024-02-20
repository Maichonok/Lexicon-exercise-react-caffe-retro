import "./Navbar.css";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink exact={true} to="/" className="link" activeClassName="active">
        Hot
      </NavLink>
      <NavLink
        exact={false}
        to="/juicy"
        className="link"
        activeClassName="active"
      >
        Juicy
      </NavLink>
      <NavLink
        exact={false}
        to="/cozy"
        className="link"
        activeClassName="active"
      >
        Cozy
      </NavLink>
    </nav>
  );
}
