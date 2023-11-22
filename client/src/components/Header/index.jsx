// import backgroudImg from "../../assets/backgroudImg"
function Header(props) {
    return (
        <header>
            <h1>Yana's Portfolio</h1>
            {/* <img src = {backgroudImg} alt="background image"></img> */}
            {props.children}
        </header>
    )
}

export default Header