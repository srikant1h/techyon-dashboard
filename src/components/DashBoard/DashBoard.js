import React from 'react'
import ProjectCard from "../ProjectCard/ProjectCard";
import "./DashBoard.scss"

function DashBoard() {
    const projects = [
        { title: "Project Name", id: "P-11", status: "in-progress", date: "01/01/2024 - 31/01/2024", files: "12" },
        { title: "Project Name", id: "P-12", status: "completed", date: "01/01/2024 - 31/01/2024", files: "15" },
        { title: "Project Name", id: "P-11", status: "in-progress", date: "01/01/2024 - 31/01/2024", files: "12" },
        { title: "Project Name", id: "P-12", status: "completed", date: "01/01/2024 - 31/01/2024", files: "15" },
        { title: "Project Name", id: "P-11", status: "in-progress", date: "01/01/2024 - 31/01/2024", files: "12" },
        { title: "Project Name", id: "P-12", status: "completed", date: "01/01/2024 - 31/01/2024", files: "15" },
        { title: "Project Name", id: "P-11", status: "in-progress", date: "01/01/2024 - 31/01/2024", files: "12" },
        { title: "Project Name", id: "P-12", status: "completed", date: "01/01/2024 - 31/01/2024", files: "15" },
        { title: "Project Name", id: "P-11", status: "in-progress", date: "01/01/2024 - 31/01/2024", files: "12" },
        { title: "Project Name", id: "P-12", status: "completed", date: "01/01/2024 - 31/01/2024", files: "15" },
    ];
    return (
        <div className="dashboard">
            <h1>Projects</h1>
            <div className="project-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default DashBoard
