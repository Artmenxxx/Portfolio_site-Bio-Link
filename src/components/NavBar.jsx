import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/NavBar.css'

const links = [
    { path: "/",         label: "nav.home" },
    { path: "/about",    label: "nav.about" },
    { path: "/projects", label: "nav.projects" },
    { path: "/contact",  label: "nav.contact" }  
]

const languages = [
    { code: "en", label: "🇬🇧 English" },
    { code: "ru", label: "🇷🇺 Русский" },
    { code: "cs", label: "🇨🇿 Čeština" },
]

function NavBar() {
    const location = useLocation()
    const { t, i18n } = useTranslation()

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

    return (
        <Navbar expand="lg" className="custom-background" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    ARTMEN<span style={{ color: "green" }}>XXX</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {links.map((link) => (
                            <Nav.Link key={link.path} as={Link} to={link.path} style={{ color: location.pathname === link.path ? "green" : "" }}>
                                {t(link.label)}
                            </Nav.Link>
                        ))}

                        <NavDropdown title={currentLang.label} id="lang-dropdown" align="end">
                            {languages.map((lang) => (
                                <NavDropdown.Item key={lang.code} onClick={() => i18n.changeLanguage(lang.code)} active={i18n.language === lang.code}>
                                    {lang.label}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar