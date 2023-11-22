// import Header from './components/Header'
// import Nav from './components/Nav'
// import Footer from './components/Footer'
// import Page from './components/Page'
// import { useLocation } from 'react-router-dom'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const currentPage = useLocation().pathname;

//   return (
//     <>
//       <Header>
//         <Nav currentPage={currentPage} />
//       </Header>

//       <main>
//         <Page currentPage={currentPage} />
//       </main>

//       <Footer />
//     </>
//   )
// }

// export default App

import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
