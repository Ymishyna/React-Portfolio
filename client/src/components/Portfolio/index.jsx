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
            name: "YourSpace",
            description: "This web application interface is a blast from the past as it replicates the nostalgic feel of what was known as MySpace but with a modern and simplistic twist.It will be completely interactve with the customization of your avatar/profile info,background color, music upon opening page, top 5 favorite songs ,your top 5 best friends,as well as a bulletin board and a blog section for personalization.", //technology I used
            deploy: "https://your-space-b0e277e1dff1.herokuapp.com/", // link to my project
            gitrepo: "https://github.com/alejandra-e-bernabel/YourSpace" // my repo project
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