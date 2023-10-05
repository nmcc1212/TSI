import { Outlet, Link } from "react-router-dom";
import {useState} from "react";

function NavBar({sendQueryToParent}) {
    const [query, setQuery] = useState("");
    const sendQuery = () => {
        sendQueryToParent(query);
    }

    return (
        <div >
            {sendQuery()}
            <nav class="border-blue-200 bg-blue-200 dark:bg-blue-200 dark:border-blue-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link onClick={sendQuery} class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" to="/">Home</Link>
                            </li>
                            <li>
                                <Link onClick={sendQuery} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/Ukraine">Ukraine News</Link>
                            </li>
                            <li>
                                <Link onClick={sendQuery} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/UKNews">UK News</Link>
                            </li>
                            <li>
                                <Link onClick={sendQuery} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/WorldNews">World News</Link>
                            </li>
                            <li>
                                <Link onClick={sendQuery} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/HackerNews">Hacker News</Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <div className="flex border border-purple-200 rounded">
                                        <input
                                            type="text"
                                            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Search..."
                                            onChange={(event) => setQuery(event.target.value)}
                                        />
                                        <button className="px-4 text-white bg-purple-600 border-l rounded">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
};

export default NavBar;