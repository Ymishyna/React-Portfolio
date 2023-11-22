import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Page from './components/Page'
import { useLocation } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>

      <main>
        <Page currentPage={currentPage} />
      </main>

      <Footer />
    </>
  )
}

export default App
