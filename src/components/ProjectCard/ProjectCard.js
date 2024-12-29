import React from 'react'
import "./ProjectCard.scss"

function ProjectCard({ title, id, status, date, files }) {
    return (
        <div className={`project-card ${status}`}>
            <div className="project-header">
                <h4>{title}</h4>
                <p>ID: {id}</p>
            </div>
            <p>Date: {date}</p>
            <div className="project-footer">
                <span>{files} Files</span>
                <span>Status: {status}</span>
            </div>
        </div>
    )
}

export default ProjectCard


