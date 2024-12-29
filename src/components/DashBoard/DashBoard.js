import React, { useState } from 'react'
import ProjectCard from "../ProjectCard/ProjectCard";
import "./DashBoard.scss"
import { MdCalendarViewDay } from "react-icons/md";
import { MdCalendarViewMonth } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import ProjectTable from '../ProjectTable/ProjectTable';


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
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [activeHead, setActiveHead] = useState(0)
    return (
        <div className="dashboard">
            <div className=" d-flex w-100 justify-between align-center">
                <div className="header-left">
                    <h1 className="title">Projects</h1>
                    <button className="btn-add-project">+ Projects</button>
                </div>
                <div>
                    <span className={activeHead === 0 ? "active-buuton" : "inactive-button"} onClick={() => setActiveHead(0)}>DashBoard</span> / <span className={activeHead === 1 ? "active-buuton" : "inactive-button"} onClick={() => setActiveHead(1)}>ProjectOverView</span>
                </div>
            </div>
            {activeHead === 0 && <><div className=" d-flex w-100 justify-between align-center">
                <div className="dropdown">
                    <button className="dropdown-btn" onClick={toggleDropdown}>
                        All Projects <span className="arrow">▼</span>
                    </button>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li>Project 1</li>
                            <li>Project 2</li>
                            <li>Project 3</li>
                        </ul>
                    )}
                </div>
                <div>
                    <MdCalendarViewDay className='right-icons' />
                    <MdCalendarViewMonth className='right-icons' />
                    <HiDotsVertical className='right-icons' />
                </div>
            </div>
                <div className="project-container">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <div className=" d-flex w-100 justify-between align-center mt-10">
                    <div className="dropdown">
                        <button className="dropdown-btn" >
                            All Tasks <span className="arrow">▼</span>
                        </button>
                    </div>
                    <div>
                        <MdCalendarViewDay className='right-icons' />
                        <MdCalendarViewMonth className='right-icons' />
                        <HiDotsVertical className='right-icons' />
                    </div>
                </div>
                <div className="project-container">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div></>}
            {
                activeHead === 1 &&
                <>
                    <div className=" d-flex w-100 justify-between align-center">
                        <div className="dropdown">
                            <button className="dropdown-btn" onClick={toggleDropdown}>
                                All Projects <span className="arrow">▼</span>
                            </button>
                            {isOpen && (
                                <ul className="dropdown-menu">
                                    <li>Project 1</li>
                                    <li>Project 2</li>
                                    <li>Project 3</li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <MdCalendarViewDay className='right-icons' />
                            <MdCalendarViewMonth className='right-icons' />
                            <HiDotsVertical className='right-icons' />
                        </div>
                    </div>
                    <ProjectTable/>
                    <div className=" d-flex w-100 justify-between align-center">
                <div className="dropdown">
                    <button className="dropdown-btn" >
                        All Projects <span className="arrow">▼</span>
                    </button>
                </div>
                <div>
                    <MdCalendarViewDay className='right-icons' />
                    <MdCalendarViewMonth className='right-icons' />
                    <HiDotsVertical className='right-icons' />
                </div>
            </div>
                    <ProjectTable />
                </>
            }
        </div>
    )
}

export default DashBoard
