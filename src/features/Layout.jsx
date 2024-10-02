import { NavLink, Outlet } from "react-router-dom";
import Red from "./Red";

/**
 * @component
 * This component is the site layout that all paths will follow.
 * In here, I put components that should show up and be reused on every single page.
 */
export default function Layout() {
  return (
    <>
      <header id="container">
        <p> Hello React Router Color Site!</p>
        <nav id="navbar">
          {/* site navigation */}
          <NavLink to="/">Home</NavLink>
          <NavLink
            to="/blue"
            className={({ isActive }) => (isActive ? "blue-link" : "")}
          >
            Blue
          </NavLink>
          <NavLink
            to="/red"
            className={({ isActive }) => (isActive ? "red-link" : "")}
          >
            Red
          </NavLink>
        </nav>

        <Outlet />
      </header>
    </>
  );
}
