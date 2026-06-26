import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

function ProjectCard({ id, title, description, image, tags, status, url }) {
    const statusColor = status === "active" ? "#3FB950" : status === "learning" ? "#F0883E" : "#8B949E" 

    return (
        <Card style={{ background: "#161B22", border: "1px solid #30363D", borderRadius: "8px", transition: "border-color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#18d525" }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#30363D" }}>

            <Card.Img variant="top" src={image || "https://placehold.co/400x200/161B22/4D9EF7?text=" + title} style={{ borderRadius: "8px 8px 0 0", height: "180px", objectFit: "cover" }} />

            <Card.Body className="d-flex flex-column gap-2">
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="text-white mb-0" style={{ fontSize: "15px", fontFamily: "monospace" }}>{title}</Card.Title>
                    <span style={{ fontSize: "11px", color: statusColor, fontFamily: "monospace" }}>● {status}</span>
                </div>

                <Card.Text className="text-secondary" style={{ fontSize: "13px", lineHeight: "1.6" }}>{description}</Card.Text>

                <div className="d-flex flex-wrap gap-1 mt-1">
                    {tags?.map((tag) => (
                        <span key={tag} style={{ background: "#4D9EF722", color: "#4D9EF7", border: "1px solid #4D9EF744", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontFamily: "monospace" }}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="d-flex gap-2 mt-2">
                    {url && (
                        <a href={url} target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "#8B949E", border: "1px solid #30363D", borderRadius: "6px", padding: "6px 14px", fontSize: "13px", textDecoration: "none", fontWeight: 500 }}>
                            Подробнее → GitHub
                        </a>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard