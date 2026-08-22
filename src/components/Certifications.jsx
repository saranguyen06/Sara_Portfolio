import twinkle from "../assets/image-0.png";
import star from "../assets/image-4.png";
import swirl from "../assets/image-5.png";
import greenSticker from "../assets/sticker5.png";
import blueSticker from "../assets/sticker6.png";
import claude from "../assets/claude_certificate.jpg";
import ibm from "../assets/ibmAI.png";
import "../styles/Certifications.css";

const certifications = [
    {
        certificate: "Artificial Intelligence Fundamentals",
        issuer: "IBM SkillsBuild",
        date: "Issued Aug 21, 2026",
        image: ibm,
        description: "This credential earner demonstrates knowledge of artificial intelligence (AI) concepts, such as natural language processing, computer vision, machine learning, deep learning, chatbots, and neural networks; AI ethics; and the applications of AI. The individual has a conceptual understanding of how to run an AI model using IBM Watson Studio. The earner is aware of the job outlook in fields that use AI and is familiar with the skills required for success in various roles in the domain.",
    },
    {
        certificate: "Certificate of completion: Claude Code 101",
        issuer: "Anthropic",
        date: "Issued Aug 2026",
        image: claude,
        description: "Successfully completed a comprehensive course on integrating Claude Code into professional software engineering workflows, mastering both fundamental concepts and advanced agentic customization.",
    },
    // {
    //     certificate: "Certificate 3",
    //     issuer: "Issuer",
    //     date: "Date",
    //     image: null,
    //     description: "Description of Certificate and the skills it recognizes.",
    // }, 
];

export default function Certifications() {
    return (
        <section id="certifications" className="certifications">
            <img className="cert-twinkle" src={twinkle} alt="" aria-hidden="true"/>
            <img className="cert-star" src={star} alt="" aria-hidden="true"/>
            <img className="cert-green" src={greenSticker} alt="" aria-hidden="true"/>
            <img className="cert-blue" src={blueSticker} alt="" aria-hidden="true"/>
            <img className="cert-swirl" src={swirl} alt="" aria-hidden="true"/>

            <header className="cert-heading">
                <h1>Certifications</h1>
            </header>

            <div className="cert-grid">
                {certifications.map((certificate) => (
                    <article className="cert-card" key={certificate.certificate}>
                        <div className="cert-card-image">
                            {certificate.image && (
                                <img src={certificate.image} alt={certificate.title} />
                            )}
                        </div>
                        <div className="cert-card-body">
                            <h2>{certificate.certificate}</h2>
                            <h3>{certificate.issuer}</h3>
                            <h3>{certificate.date}</h3>
                        </div>
                        <div className="cert-card-overlay">
                            <p>{certificate.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}