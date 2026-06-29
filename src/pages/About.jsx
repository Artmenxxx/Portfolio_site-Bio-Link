import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useTranslation } from "react-i18next"

const techs = [
    { label: "HTML5", color: "#E34F26" }, { label: "CSS3", color: "#1572B6" },
    { label: "JavaScript", color: "#F7DF1E" }, { label: "React", color: "#61DAFB" },
    { label: "Node.js", color: "#3FB950" }, { label: "Express", color: "#fff" },
    { label: "MariaDB", color: "#C0765A" }, { label: "PostgreSQL", color: "#336791" },
    { label: "Linux", color: "#FCC624" }, { label: "nginx", color: "#009639" },
    { label: "Docker", color: "#2496ED" }, { label: "Bootstrap", color: "#7952B3" },
    { label: "Vite", color: "#BC8CFF" }, { label: "Git", color: "#F05032" },
    { label: "Python", color: "#ffde57" }, { label: "Django", color: "#0be28f" },
]

function About() {
    const { t } = useTranslation()
    return (
        <Container className="py-5">
            <Row className="align-items-start g-5">
                <Col md={6}>
                    <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "8px", padding: "20px" }}>
                        <h1 className="text-white fw-bold mb-3">{t("about.title")}</h1>
                        <p className="text-secondary mb-4">{t("about.description1")}</p>
                        <p className="text-secondary">{t("about.description2")}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "8px", padding: "20px" }}>
                        <h5 className="text-white mb-3">{t("about.stack_title")}</h5>
                        <div className="d-flex flex-wrap gap-2">
                            {techs.map((tech) => (
                                <span key={tech.label} style={{ color: tech.color, background: tech.color + "22", border: `1px solid ${tech.color}44`, borderRadius: "4px", padding: "4px 12px", fontSize: "13px", fontFamily: "monospace", whiteSpace: "nowrap" }}>
                                    {tech.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="align-items-start g-5 mt-2">
                <Col md={6}>
                    <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "8px", padding: "20px" }}>
                        <h5 className="text-white mb-3">{t("about.card_pi_title")}</h5>
                        <p className="text-secondary mb-0">{t("about.card_pi_text")}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "8px", padding: "20px" }}>
                        <h5 className="text-white mb-3">{t("about.card_dev_title")}</h5>
                        <p className="text-secondary mb-0">{t("about.card_dev_text")}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About