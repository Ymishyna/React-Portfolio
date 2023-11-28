// function Footer() {
//     const icons = [
//         {
//             name: "fab fa-github",
//             link: "https://github.com/Ymishyna" //link to my github
//         },
//         {
//             name: "fab fa-linkedin",
//             link: "https://www.linkedin.com/in/yana-mishyna/" //link to my linkedin
//         }
//     ]
//     return (
//         <footer>
//             {icons.map(icon => (
//                 <a href={icon.link} key={icon.name} target="_blank" rel='noopener noreferrer'></a>
//             )
//             )}
//         </footer >
//     )
// }

// export default Footer

// Imports svg files for social media images
import svgGitHub from "../../../public/assets/github.svg";
import svgLinkedIn from "../../../public/assets/linkedin.svg";

// Creates a footer element with a link to KellySoftware.org and social media profiles.
export default function Footer() {
  return (
    <footer>
      {/* <h4>
        &copy; 2022&nbsp;
        <a
          href="https://www.kellysoftware.org"
          target="_blank"
          rel="noreferrer"
        >
          Kelly Software Solutions
        </a>
      </h4> */}
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