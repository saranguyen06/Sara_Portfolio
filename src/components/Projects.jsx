import { useState, useEffect, useCallback } from "react";
import { socialLinks } from "../config/socialLinks";
import greenGingham from "../assets/Sage_Gingham.webp";
import paper from "../assets/pinksticky-1.png";
import flowerDoodle from "../assets/Flower_doodle.png";
import starDoodle from "../assets/Star_doodle.png";
import calendarProject from "../assets/calendar.png";
import buckitProject from "../assets/buckit.gif"
import "../styles/Projects.css";

const PROJECTS_PER_PAGE = 3;

// project data - add new projects here, no placeholders needed
const projects = [
    {
        title: "Buck-it",
        description: "Full-stack travel planning application.",
        stack: "HTML, CSS, JavaScript, Bootstrap, Node.js, Express, PostgreSQL, Render",
        image: buckitProject,
        detailsUrl: "/projects/project-one",
        githubUrl: socialLinks?.repositories?.projectOne,
    },
    {
        title: "Calendar",
        description: "Fully interactive web-based calendar, enabling real-time event updates without page reloads.",
        stack: "HTML, Bootstrap, CSS, and JavaScript",
        image: calendarProject,
        detailsUrl: "/projects/project-two",
        githubUrl: socialLinks?.repositories?.projectTwo,
    },
    {
        title: "Project Three",
        description: "A brief description of your third project. Highlight the key features and what makes it unique.",
        stack: "Tech Stack",
        image: null,
        detailsUrl: "/projects/project-three",
        githubUrl: socialLinks?.repositories?.projectThree,
    },
    {
        title: "Project Four",
        description: "A brief description of your fourth project. Highlight the key features and what makes it unique.",
        stack: "Tech Stack",
        image: null,
        detailsUrl: "/projects/project-four",
        githubUrl: socialLinks?.repositories?.projectFour,
    },
];

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

    // split into pages of up to 3 — last page can have fewer, no padding
    const pages = Array.from({ length: totalPages }, (_, pageIndex) => {
        const start = pageIndex * PROJECTS_PER_PAGE;
        return projects.slice(start, start + PROJECTS_PER_PAGE);
    });

    const handlePrevPage = useCallback(() => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    }, []);

    const handleNextPage = useCallback(() => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    }, [totalPages]);

    // keyboard arrow navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") handlePrevPage();
            if (e.key === "ArrowRight") handleNextPage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handlePrevPage, handleNextPage]);

    return (
        <section id="projects" className="projects">
            <img className="projects-gingham" src={greenGingham} alt="" aria-hidden="true" />

            <header className="projects-heading">
                <h1>
                    <span className="projects-heading-pro">Pro</span>
                    <span className="projects-heading-jects">jects</span>
                </h1>
                <img className="projects-doodle-flower" src={flowerDoodle} alt="" aria-hidden="true" />
                <img className="projects-doodle-star" src={starDoodle} alt="" aria-hidden="true" />
            </header>

            <div className="projects-stage">
                <div className="projects-paper">
                    <img className="projects-paper-bg" src={paper} alt="" aria-hidden="true" />

                    <div className="projects-paper-content">
                        <div
                            className="projects-track"
                            style={{ transform: `translateX(-${currentPage * 100}%)` }}
                        >
                            {pages.map((pageProjects, pageIndex) => (
                                <div
                                    className="projects-page"
                                    key={pageIndex}
                                    aria-hidden={pageIndex !== currentPage}
                                >
                                    {pageProjects.map((project) => (
                                        <article className="project-card" key={project.title}>
                                            <div className="project-card-image">
                                                {project.image && (
                                                    <img src={project.image} alt={project.title} />
                                                )}
                                            </div>
                                            <div className="project-card-body">
                                                <h2>{project.title}</h2>
                                                <h3>{project.stack}</h3>
                                                <p>{project.description}</p>
                                                <a className="project-card-btn" href={project.detailsUrl}>
                                                    View <span aria-hidden="true">&rarr;</span>
                                                </a>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {totalPages > 1 && (
                        <>
                            <button
                                type="button"
                                className="projects-arrow projects-arrow-prev"
                                onClick={handlePrevPage}
                                disabled={currentPage === 0}
                                aria-label="Previous projects"
                            >
                                &larr;
                            </button>
                            <button
                                type="button"
                                className="projects-arrow projects-arrow-next"
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages - 1}
                                aria-label="Next projects"
                            >
                                &rarr;
                            </button>
                        </>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="projects-dots">
                        {pages.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                className={`projects-dot ${i === currentPage ? "is-active" : ""}`}
                                onClick={() => setCurrentPage(i)}
                                aria-label={`Go to page ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}