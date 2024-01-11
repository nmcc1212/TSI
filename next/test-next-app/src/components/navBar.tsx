import Link from 'next/link';
import { useState } from "react";

// type Props = {
//   sendQueryToParent: (query: string) => void;
// };

const NavBar = () => {
    // const [query, setQuery] = useState("");
  
    // const sendQuery = () => {
    //   sendQueryToParent(query);
    // };
  
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   const newQuery = event.target.value;
    //   setQuery(newQuery);
    //   sendQueryToParent(newQuery);
    // };

  return (
    <div className="">
      <nav className="border-blue-200 bg-blue-200 dark:bg-blue-200 dark:border-blue-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="h-5 font-medium flex flex-col p-4 md:p-3 items-center mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  // onClick={sendQuery}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  href="/Ukraine"
                >
                  Ukraine News
                </Link>
              </li>
              <li>
                <Link
                  // onClick={sendQuery}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  href="/UKNews"
                >
                  UK News
                </Link>
              </li>
              <li>
                <Link
                  // onClick={sendQuery}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  href="/WorldNews"
                >
                  World News
                </Link>
              </li>
              <li>
                <Link
                  // onClick={sendQuery}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  href="/HackerNews"
                >
                  Hacker News
                </Link>
              </li>
              <li>
                <Link
                  // onClick={sendQuery}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  href="/DefenceNews"
                >
                  Defence News
                </Link>
              </li>
              <li>
                <div className="flex border border-purple-200 rounded">
                  <input
                    type="text"
                    className="block w-full px-4 h-5 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    // value={query}
                    // onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="px-4 text-white bg-purple-600 border-l rounded"
                    aria-label="Search"
                    // onClick={sendQuery}
                  >
                    Search
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
