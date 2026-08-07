import laceTrim from "../assets/lace_trim.png";
import paper from "../assets/paper.png";
import pinkSticker from "../assets/sticker1.png";
import blueSticker from "../assets/sticker2.png";
import "../styles/Skills.css";

const skillGroups = [
    {
        title: "Programming Languages",
        details: "Python, C/C++, Java, HTML/CSS, JavaScript, SQL",
    },
    {
        title: "Frameworks & Tools",
        details: "React.js, Node.js, Express, Docker, PostgreSQL, Pandas, Scikit-learn, NumPy",
    },
    {
        title: "Soft Skills",
        details: "Leadership, Collaboration & Teamwork, Communication, Adaptability, Time Management, Problem Solving",
    },
];

export default function Skills() {
  return (
        <section id="skills" className="skills" aria-labelledby="skills-section">
        <img className="skills-lace skills-lace-top" src={laceTrim} alt="" aria-hidden="true" />
        <img className="skills-lace skills-lace-bottom" src={laceTrim} alt="" aria-hidden="true" />

        <header className="skills-heading">
            <h1 id="skills-section">Skills</h1>
        </header>

        <div className="skills-note-wrap">
            <img className="skills-paper" src={paper} alt="" aria-hidden="true" />
            <img className="skills-sticker skills-sticker-pink" src={pinkSticker} alt="" aria-hidden="true" />
            <img className="skills-sticker skills-sticker-blue" src={blueSticker} alt="" aria-hidden="true" />

            <div className="skills-note-content">
            {skillGroups.map((group, index) => (
                <article className="skills-group" key={group.title}>
                <span className="skills-number" aria-hidden="true">0{index + 1}</span>
                <h2>{group.title}</h2>
                <p>{group.details}</p>
                </article>
            ))}
            </div>
        </div>
        </section>
  );
}
