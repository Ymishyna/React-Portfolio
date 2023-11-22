import { useState } from "react"
import Project from "../Project"

function Portfolio() {
    const [projects] = useState([
        {
            name: "MOOdy",
            description: "HTML, CSS, Git, JS, Web APIs, Third-Party APIs, Server-Side APIs", //technology I used
            deploy: "https://madeleinea42.github.io/moody/", // link to my project
            gitrepo: "https://github.com/MadeleineA42/moody" // my repo project
        },
        {
            name: "YourSpace",
            description: "Node.js, Express.js, SQL, ORM, MVC", //technology I used
            deploy: "https://your-space-b0e277e1dff1.herokuapp.com/", // link to my project
            gitrepo: "https://github.com/alejandra-e-bernabel/YourSpace" // my repo project
        },
        {
            name: "Tech_Blog",
            description: "Node.js, Express.js, SQL, ORM, MVC", //technology I used
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