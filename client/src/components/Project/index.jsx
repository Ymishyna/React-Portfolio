import React from "react";

// import * as projects from "../../assets" // images from projects same name as name value from line 6 name: ""

function Project({ project }) {
    const { name, description, deploy, gitrepo } = project

    return (
        <div className="project" key={name}>
            {/* <img src={require(`../../../public/assets/${name}.jpg`)} alt={name} /> */}
            <div>
                <h3>
                    <a href={deploy}>{name}</a>
                    <a href={gitrepo}><i className="fab fa-github"></i></a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Project