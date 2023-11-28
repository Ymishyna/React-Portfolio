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
      <ul className="nav-list">
        {pages.map((Page) => (
          <li
            key={Page.name}
            className={`nav-item ${currentPage.name === Page.name ? 'navActive' : ''}`}>
            <span
              onClick={() => setCurrentPage(Page)}>{Page.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;