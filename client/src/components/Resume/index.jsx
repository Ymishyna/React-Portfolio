// // line 8 - link to my resume from assets pdf file.
// two titles for skills front end, back end after line 9
import resumePage from '/Users/yanamishyna/bootcamp/HOMEWORK/React-Portfolio/client/src/assets/RESUME.pdf'


function Resume() {
    return (
        <section>
            <div className="resume-container">
                {/* Title Section */}
                <div className="resume-title">
                    <h1>Here is my <a href={resumePage} target="_blank" rel="noopener noreferrer">Resume</a></h1>
                </div>
                {/* Skills Section */}
                <div className="skills-container">
                    {/* Front End Skills Section */}
                    <div className="skills-column">
                        <h2>Front End Skills</h2>
                        <ul className="list-group">
                            <li>HTML5</li>
                            <li>CSS3 (Sass/Less)</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Vue.js</li>
                            <li>Responsive Design</li>
                            <li>Web Performance Optimization</li>
                            <li>Version Control (Git)</li>
                        </ul>
                    </div>

                    {/* Back End Skills Section */}
                    <div className="skills-column">
                        <h2>Back End Skills</h2>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>RESTful API Design</li>
                            <li>Database Management (MongoDB, MySQL)</li>
                            <li>Server-side Rendering (Next.js)</li>
                            <li>Authentication and Authorization</li>
                            <li>API Integration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;