// Imports svg files for social media images
import svgGitHub from "../../../public/assets/github.svg";
import svgLinkedIn from "../../../public/assets/linkedin.svg";

// Creates a footer element with a link to KellySoftware.org and social media profiles.
export default function Footer() {
    return (
        <footer>
            <div className="socialMedia">
                <a href="https://github.com/Ymishyna" target="_blank" rel="noreferrer">
                    <img src={svgGitHub} alt="GitHub" />
                    GitHub</a>
                <a
                    href="https://www.linkedin.com/in/yana-mishyna/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={svgLinkedIn} alt="LinkedIn" />LinkedIn
                </a>
            </div>
        </footer>
    );
}