

function Footer() {
    const icons = [
        {
            name: "fab fa-github",
            link: "" //link to my github
        },
        {
            name: "fab fa-linkedin",
            link: "" //link to my linkedin
        }
    ]
    return (
        <footer>
            {icons.map(icon => (
                <a href={icon.link} key={icon.name} target="_blank" rel='noopener noreferrer'></a>
            )
            )}
        </footer >
    )
}

export default Footer