import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import ContactForm from "../components/Forum"
import { useTranslation } from "react-i18next"

function Contact() {
    const { t } = useTranslation()
    return (
        <Container className="mt-3 pb-5">
            <Row className="align-items-start g-5">
                <Col md={6}>
                    <h1 className="text-white fw-bold mb-3">{t("contact.title")}</h1>
                    <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "8px", padding: "20px", marginBottom: "16px" }}>
                        <p className="text-white mb-1 fw-semibold">{t("contact.hours_title")}</p>
                        <p className="text-secondary mb-1">{t("contact.hours_weekday")}</p>
                        <p className="text-secondary mb-0">{t("contact.hours_weekend")}</p>
                    </div>
                    <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "8px", padding: "20px", marginBottom: "16px" }}>
                        <p className="text-white mb-1 fw-semibold">{t("contact.reach_title")}</p>
                        <p className="text-secondary mb-1">Email: <a href="mailto:artmenxxx@gmail.com" className="text-info">artmenxxx@gmail.com</a></p>
                        <p className="text-secondary mb-0">Telegram: <a href="https://t.me/request_artmenxxx_bot" className="text-info" target="_blank" rel="noopener noreferrer">@request_artmenxxx_bot</a></p>
                    </div>
                    <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "8px", padding: "20px" }}>
                        <p className="text-white mb-1 fw-semibold">{t("contact.github_title")}</p>
                        <p className="text-secondary mb-0">{t("contact.github_text")} <a href="https://github.com/artmenxxx" className="text-info" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    </div>
                </Col>
                <Col md={6}><ContactForm /></Col>
            </Row>
        </Container>
    )
}

export default Contact