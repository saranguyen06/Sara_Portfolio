import twinkle from "../assets/image-0.png";
import star from "../assets/image-4.png";
import swirl from "../assets/image-5.png";
import greenSticker from "../assets/sticker5.png";
import blueSticker from "../assets/sticker6.png";
import "../styles/Certifications.css";

const certifications = [
    {
        certificate: "Certificate 1",
        issuer: "Issuer",
        date: "Date",
        image: null,
        description: "Description of Certificate and the skills it recognizes.",
    },
    {
        certificate: "Certificate 2",
        issuer: "Issuer",
        date: "Date",
        image: null,
        description: "Description of Certificate and the skills it recognizes.",
    },
    {
        certificate: "Certificate 3",
        issuer: "Issuer",
        date: "Date",
        image: null,
        description: "Description of Certificate and the skills it recognizes.",
    },
    
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
                            <p>{certificate.issuer}</p>
                            <p>{certificate.date}</p>
                            <p>{certificate.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}