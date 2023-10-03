import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <h1>My Blog</h1>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Ukraine">Ukraine News</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>

        <Outlet />
        </div>
  )
};

export default NavBar;