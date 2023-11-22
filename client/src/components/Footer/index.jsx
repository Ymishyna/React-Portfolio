function Footer() {
    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/Ymishyna" //link to my github
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/yana-mishyna/" //link to my linkedin
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