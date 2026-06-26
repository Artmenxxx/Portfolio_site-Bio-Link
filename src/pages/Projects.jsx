import projects from "../assets/projects.json"
import ProjectCard from "../components/ProjectCard"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

function Projects() {
    return (
        <Container className="mt-4 pb-5">
            <h1 className="text-white fw-bold mb-4">Projects</h1>
            <Row className="g-4">
                {projects.map((project) => (
                    <Col key={project.id} md={4}>
                        <ProjectCard {...project} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Projects