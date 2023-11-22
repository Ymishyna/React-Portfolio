// import { Link } from "react-router-dom"

// function Nav({ currentPage }) {
//     const pages = ['portfolio', 'contact', 'resume']
//     return (
//         <nav>
//             <ul>
//                 <li
//                     className={`mx-5 ${currentPage === '/' && 'navActive'}`} key='about'>
//                     <Link to='/'>About</Link>
//                 </li>
//                 {pages.map(
//                     (Page) => (
//                         <li
//                             className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`} key='about'>
//                             <Link to={`/${Page}`}>{Page}</Link>
//                         </li>
//                     )
//                 )}
//             </ul>
//         </nav>
//     )
// }

// export default Nav

import React, { useEffect } from 'react';
function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;
  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);
  return (
      <nav>
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {Page.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}
export default Nav;