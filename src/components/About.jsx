import { socialLinks } from "../config/socialLinks";
import profile from "../assets/profile_pic.jpg";
import lace from "../assets/lace.png";
import paper from "../assets/pinksticky-2.png";
import pinkButton from "../assets/sticker3.png";
import greenButton from "../assets/sticker4.png";
import flowerAscii from "../assets/image-1.png";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-hero" aria-labelledby="about-sara">
        <img className="about-lace" src={lace} alt="" aria-hidden="true" />
        <img className="about-paper" src={paper} alt="" aria-hidden="true" />
        <span className="about-doodle about-doodle-flower" aria-hidden="true">✿</span>
        <span className="about-doodle about-doodle-star" aria-hidden="true">☆</span>

        <div className="about-copy">
            <p className="about-greeting">Hello! I'm</p>
            <h1 id="about-name">Sara Nguyen</h1>
            <p className="about-intro">
            I am currently a Computer Science student at CU Boulder, interested in
            software development and AI/ML engineering. I have experience developing
            full-stack web applications using JavaScript, Node.js, Express, and
            PostgreSQL, and I have strong problem-solving skills developed through
            coursework, collaborative software projects, and leadership roles.
            </p>
            <div className="about-actions">
            <a
                className="about-button about-button-primary"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
            >
                Let's Connect!
            </a>
            <a className="about-button about-button-secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View my resume
            </a>
            </div>
        </div>

        <div className="about-portrait-wrap">
            <figure className="about-polaroid">
            <img src={profile} alt="Sara Nguyen" />
            </figure>
            <img className="about-pink-sticker" src={pinkButton} alt="" aria-hidden="true" />
            <img className="about-green-sticker" src={greenButton} alt="" aria-hidden="true" />
            <img className="about-flower" src={flowerAscii} alt="" aria-hidden="true" />
        </div>
    </section>
  );
}
