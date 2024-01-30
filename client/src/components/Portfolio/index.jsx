import { useState } from "react"
import Project from "../Project"

function Portfolio() {
    const [projects] = useState([
        {
            name: "MOOdy",
            description: "Welcome to Moody! Our goal with this page is to help boost an individuals mood. On the homepage the user is presented with two options. If the user knows their mood, they are presented with various links to aid them. If the user is unsure of their mood, they are presented with a short quiz to help determine their mood.Each mood will have a dedicated page that captures the unique styling of the feeling. On each page, the user will be presented with relaxing music (via Youtube), inspirational/motivational quotes and gifs (via giphys).", //technology I used
            deploy: "https://madeleinea42.github.io/moody/", // link to my project
            gitrepo: "https://github.com/MadeleineA42/moody" // my repo project
        },
        {
            name: "PAWect Match",
            description: "Pawfect Match: Easy pet adoption app with Dogs and Cats. Search by Species, Gender, Age. Hosted on Heroku for quick access. Find your perfect pet today! I led deployment, continuous integration, and managed branching and merging structures for application. Oversaw the front-end team, ensuring seamless integration with the backend. Played a pivotal role in coordinating and integrating end-to-end functionalities.", //technology I used
            deploy: "https://nameless-beyond-62501-786f112efe52.herokuapp.com/", // link to my project
            gitrepo: "https://github.com/Ymishyna/PawfectMatch" // my repo project
        },
        {
            name: "Tech_Blog",
            description: "My task was to build a CMS (Content Management System)-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. My site will be deployed to Heroku. My app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.", //technology I used
            deploy: "https://floating-refuge-70464-b9cf1235304b.herokuapp.com/", // link to my project
            gitrepo: "https://github.com/Ymishyna/Tech-Blog" // my repo project
        }

    ])

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <Project
                        project={project} key={"project" + idx}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio