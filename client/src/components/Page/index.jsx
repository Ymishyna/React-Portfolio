// import { useEffect } from "react"
// import PageDisplay from "../PageDisplay"
// import { Outlet } from "react-router-dom"

// function Page({ currentPage }) {
//     currentPage = currentPage.subString(1)

//     useEffect(() => {
//         document.title = currentPage;
//     }, [currentPage]
//     )
//     return (
//         <section>
//             <h2>{currentPage}</h2>
//             <PageDisplay>
//                 <Outlet />
//             </PageDisplay>
//         </section>
//     )
// }

// export default Page

import React from 'react';
import PageDisplay from '../PageDisplay';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';


function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <PageDisplay>{renderPage()}</PageDisplay>
    </section>
  );
}
export default Page;