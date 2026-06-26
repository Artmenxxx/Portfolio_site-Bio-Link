import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Home() {
    const { t } = useTranslation()
    return (
        <Container className="mt-5 pb-5">
            <Row className="align-items-center g-5 mb-5">
                <Col md={8}>
                    <p style={{ color: "#3FB950", fontFamily: "monospace", marginBottom: "8px" }}>{t("home.greeting")}</p>
                    <h1 className="text-white fw-bold" style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: "1.1" }}>Anton</h1>
                    <h2 style={{ color: "#8B949E", fontWeight: 400, fontSize: "clamp(18px, 3vw, 28px)", marginBottom: "24px" }}>{t("home.subtitle")}</h2>
                    <p className="text-secondary" style={{ fontSize: "16px", lineHeight: "1.7", maxWidth: "520px", marginBottom: "32px" }}>{t("home.description")}</p>
                    <div className="d-flex gap-3 flex-wrap">
                        <Link to="/projects" style={{ background: "#3FB950", color: "#000", padding: "10px 24px", borderRadius: "6px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>{t("home.btn_projects")}</Link>
                        <Link to="/contact" style={{ background: "transparent", color: "#8B949E", padding: "10px 24px", borderRadius: "6px", textDecoration: "none", fontWeight: 600, fontSize: "14px", border: "1px solid #30363D" }}>{t("home.btn_contact")}</Link>
                    </div>
                </Col>
                <Col md={4} className="d-none d-md-flex justify-content-center">
                    <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "12px", padding: "24px", fontFamily: "monospace", fontSize: "13px", width: "100%" }}>
                        <p style={{ color: "#8B949E", marginBottom: "8px" }}>// stack.js</p>
                        <p style={{ color: "#BC8CFF", marginBottom: "4px" }}>const <span style={{ color: "#61DAFB" }}>Anton</span> = {"{"}</p>
                        <p style={{ color: "#E6EDF3", marginBottom: "4px", paddingLeft: "16px" }}>role: <span style={{ color: "#3FB950" }}>"IT Student"</span>,</p>
                        <p style={{ color: "#E6EDF3", marginBottom: "4px", paddingLeft: "16px" }}>location: <span style={{ color: "#3FB950" }}>"CZ 🇨🇿"</span>,</p>
                        <p style={{ color: "#E6EDF3", marginBottom: "4px", paddingLeft: "16px" }}>frontend: <span style={{ color: "#3FB950" }}>"React"</span>,</p>
                        <p style={{ color: "#E6EDF3", marginBottom: "4px", paddingLeft: "16px" }}>backend: <span style={{ color: "#3FB950" }}>"Node.js"</span>,</p>
                        <p style={{ color: "#E6EDF3", marginBottom: "4px", paddingLeft: "16px" }}>infra: <span style={{ color: "#3FB950" }}>"Linux 🐧"</span>,</p>
                        <p style={{ color: "#BC8CFF" }}>{"}"};</p>
                    </div>
                </Col>
            </Row>
            <Row className="g-4">
                <Col md={4}>
                    <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "8px", padding: "20px", height: "100%" }}>
                        <p style={{ fontSize: "24px", marginBottom: "8px" }}>🍓</p>
                        <p className="text-white fw-semibold mb-2">Homelab</p>
                        <p className="text-secondary" style={{ fontSize: "13px" }}>{t("home.card_homelab")}</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "8px", padding: "20px", height: "100%" }}>
                        <p style={{ fontSize: "24px", marginBottom: "8px" }}>⚡</p>
                        <p className="text-white fw-semibold mb-2">Frontend</p>
                        <p className="text-secondary" style={{ fontSize: "13px" }}>{t("home.card_frontend")}</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "8px", padding: "20px", height: "100%" }}>
                        <p style={{ fontSize: "24px", marginBottom: "8px" }}>🌍</p>
                        <p className="text-white fw-semibold mb-2">Languages</p>
                        <p className="text-secondary" style={{ fontSize: "13px" }}>{t("home.card_languages")}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home