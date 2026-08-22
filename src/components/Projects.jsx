import { useState, useEffect, useCallback, useRef } from "react";
import { socialLinks } from "../config/socialLinks";
import greenGingham from "../assets/Sage_Gingham.webp";
import paper from "../assets/pinksticky-1.png";
import flowerDoodle from "../assets/Flower_doodle.png";
import starDoodle from "../assets/Star_doodle.png";
import calendarProject from "../assets/calendar.png";
import buckitProject from "../assets/buckit.gif"
import "../styles/Projects.css";

const DESKTOP_PROJECTS_PER_PAGE = 3;
const MOBILE_PROJECTS_PER_PAGE = 1;
const MOBILE_QUERY = "(max-width: 640px)";

// project data - add new projects here, no placeholders needed
const projects = [
    {
        title: "Buck-it",
        description: "Full-stack travel planning application.",
        stack: "HTML, CSS, JavaScript, Bootstrap, Node.js, Express, PostgreSQL, Render",
        image: buckitProject,
        url: socialLinks?.projects?.projectOne,
        githubUrl: socialLinks?.repositories?.projectOne,
    },
    {
        title: "Calendar",
        description: "Fully interactive web-based calendar, enabling real-time event updates without page reloads.",
        stack: "HTML, Bootstrap, CSS, and JavaScript",
        image: calendarProject,
        url: socialLinks?.projects?.projectTwo,
        githubUrl: socialLinks?.repositories?.projectTwo,
    },
    // {
    //     title: "Project Three",
    //     description: "A brief description of your third project. Highlight the key features and what makes it unique.",
    //     stack: "Tech Stack",
    //     image: null,
    //     detailsUrl: "/projects/project-three",
    //     githubUrl: socialLinks?.repositories?.projectThree,
    // },
    // {
    //     title: "Project Four",
    //     description: "A brief description of your fourth project. Highlight the key features and what makes it unique.",
    //     stack: "Tech Stack",
    //     image: null,
    //     detailsUrl: "/projects/project-four",
    //     githubUrl: socialLinks?.repositories?.projectFour,
    // },
];

export default function Projects() {
    const trackRef = useRef(null);

    const [projectsPerPage, setProjectsPerPage] = useState(() =>
        typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches
            ? MOBILE_PROJECTS_PER_PAGE
            : DESKTOP_PROJECTS_PER_PAGE
    );
    const [currentPage, setCurrentPage] = useState(0);

    // switch page-size between mobile (1 project/slide) and desktop (3/slide)
    useEffect(() => {
        const mql = window.matchMedia(MOBILE_QUERY);
        const handleChange = (e) => {
            setProjectsPerPage(e.matches ? MOBILE_PROJECTS_PER_PAGE : DESKTOP_PROJECTS_PER_PAGE);
            setCurrentPage(0); // regrouping changes page indices, reset to avoid pointing at a stale page
        };
        mql.addEventListener("change", handleChange);
        return () => mql.removeEventListener("change", handleChange);
    }, []);

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const pages = Array.from({ length: totalPages }, (_, pageIndex) => {
        const start = pageIndex * projectsPerPage;
        return projects.slice(start, start + projectsPerPage);
    });

    const scrollToPage = useCallback((pageIndex) => {
        const track = trackRef.current;
        if (!track) return;
        const clamped = Math.max(0, Math.min(pageIndex, totalPages - 1));
        const target = track.children[clamped];
        if (target) {
            track.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
        }
        setCurrentPage(clamped);
    }, [totalPages]);

    const handlePrevPage = useCallback(() => scrollToPage(currentPage - 1), [currentPage, scrollToPage]);
    const handleNextPage = useCallback(() => scrollToPage(currentPage + 1), [currentPage, scrollToPage]);

    // keyboard arrow navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") handlePrevPage();
            if (e.key === "ArrowRight") handleNextPage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handlePrevPage, handleNextPage]);

    // keep dots/arrow-disabled state in sync when the user swipes/drags manually
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        let frame;
        const handleScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const index = Math.round(track.scrollLeft / track.clientWidth);
                setCurrentPage((prev) => (prev === index ? prev : index));
            });
        };
        track.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            track.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

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
                        <div className="projects-track" ref={trackRef}>
                            {pages.map((pageProjects, pageIndex) => (
                                <div className="projects-page" key={pageIndex}>
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
                                                <a className="project-card-btn" href={project.url} target="_blank">
                                                    View <span aria-hidden="true">&rarr;</span>
                                                </a>
                                                <a className="project-card-btn" href={project.githubUrl} target="_blank">
                                                    Github
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
                                onClick={() => scrollToPage(i)}
                                aria-label={`Go to page ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}