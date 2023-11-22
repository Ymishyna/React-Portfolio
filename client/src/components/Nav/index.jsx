import { Link } from "react-router-dom"

function Nav({ currentPage }) {
    const pages = ['portfolio', 'contact', 'resume']
    return (
        <nav>
            <ul>
                <li
                    className={`mx-5 ${currentPage === '/' && 'navActive'}`} key='about'>
                    <Link to='/'>About</Link>
                </li>
                {pages.map(
                    (Page) => (
                        <li
                            className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`} key='about'>
                            <Link to={`/${Page}`}>{Page}</Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )
}

export default Nav