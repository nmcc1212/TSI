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
                <Link to="/UKNews">UK News</Link>
            </li>
            <li>
                <Link to="/WorldNews">World News</Link>
            </li>
            <li>
                <Link to="/HackerNews">Hacker News</Link>
            </li>
            </ul>
        </nav>

        <Outlet />
        </div>
  )
};

export default NavBar;