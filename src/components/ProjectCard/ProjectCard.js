import React from 'react'
import "./ProjectCard.scss"
import { GoFileDirectory } from "react-icons/go";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoDocumentAttachOutline } from "react-icons/io5";




function ProjectCard({ title, id, status, date, files }) {
    return (
        <div className={`project-card ${status}`}>
            <div className="project-header align-center">
                <div className='d-flex align-center'>
                <GoFileDirectory className='icon-size'/>
                <div className='project-bold-text'>{title}</div>
                </div>
                <p className='project-bold-text'>ID: {id}</p>
            </div>
            
            <div className="status-badge">
                On Track
            </div>
            <div className='d-flex w-100 align-center'>
                07
                <div className="progress-bar d-flex">
                    <div className="progress" style={{ width: "50%" }}>
                    </div>
                    <div className="progress-label">50%</div>
                </div>
                14
            </div>
            <p className='d-flex font-13'><MdOutlineCalendarMonth /> Date: {date}</p>
            <div className="project-footer d-flex align-end">
                <span><FaRegCircleUser /><FaRegCircleUser /><FaRegCircleUser />{files} +</span>
                <span className='d-flex align-center bold-text'><IoDocumentAttachOutline className='icon-size'/>12Files</span>
            </div>

        </div>
    )
}

export default ProjectCard


