import { useEffect } from "react"
import PageDisplay from "../PageDisplay"
import { Outlet } from "react-router-dom"

function Page({ currentPage }) {
    currentPage = currentPage.subString(1)

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]
    )
    return (
        <section>
            <h2>{currentPage}</h2>
            <PageDisplay>
                <Outlet />
            </PageDisplay>
        </section>
    )
}

export default Page