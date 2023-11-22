// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import About from './components/About'
// import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'
// import Resume from './components/Resume'
// import App from './App.jsx'
// import './index.css'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <About />,
//       },
//       {
//         path: "portfolio",
//         element: <Portfolio />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "resume",
//         element: <Resume />,
//       }
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router}/>
// )


import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';


ReactDOMClient.createRoot(document.getElementById('root')).render(

    <App />
  
  
);