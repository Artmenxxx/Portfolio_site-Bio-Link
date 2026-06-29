import '../style/TechBadges.css'

const techs = [
    { label: "HTML5",       color: "#E34F26" },
    { label: "CSS3",        color: "#1572B6" },
    { label: "JavaScript",  color: "#F7DF1E" },
    { label: "React",       color: "#61DAFB" },
    { label: "Node.js",     color: "#3FB950" },
    { label: "Express",     color: "#ffffff" },
    { label: "MariaDB",     color: "#C0765A" },
    { label: "PostgreSQL",  color: "#336791" },
    { label: "Linux",       color: "#FCC624" },
    { label: "nginx",       color: "#009639" },
    { label: "Docker",      color: "#2496ED" },
    { label: "Bootstrap",   color: "#7952B3" },
    { label: "Vite",        color: "#BC8CFF" },
    { label: "Git",         color: "#F05032" },
    { label: "Python",      color: "#ffde57" }, 
    { label: "Django",      color: "#0be28f" },

]

function TechBadges() {
    return (
        <div className="badges-wrapper">
            <div className="badges-track">
                {}
                {[...techs, ...techs].map((tech, i) => (
                     <span key={i} className="badge-item" style={{
                            color: tech.color,
                            background: tech.color + "22",   
                            borderColor: tech.color + "44", 
                        }} >
                        {tech.label}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default TechBadges