import React from "react";
import "./ProjectTable.scss";

const ProjectTable = () => {
  const projects = [
    {
      id: 1,
      name: "Techyon Software",
      percentage: "50%",
      owner: "Techyon",
      tasks: { completed: 10, total: 20 },
      status: "Not Started",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 2,
      name: "Techyon Software",
      percentage: "50%",
      owner: "Techyon",
      tasks: { completed: 10, total: 20 },
      status: "In Progress",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 3,
      name: "Techyon Software",
      percentage: "50%",
      owner: "Techyon",
      tasks: { completed: 10, total: 20 },
      status: "Completed",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
    {
      id: 4,
      name: "Techyon Software",
      percentage: "50%",
      owner: "Techyon",
      tasks: { completed: 10, total: 20 },
      status: "Archived",
      startDate: "29/10/2024",
      endDate: "29/10/2025",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "In Progress":
        return "status-in-progress";
      case "Completed":
        return "status-completed";
      case "Archived":
        return "status-archived";
      default:
        return "status-not-started";
    }
  };

  return (
    <div className="project-table mt-10">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Name</th>
            <th>%</th>
            <th>Owner</th>
            <th>Tasks</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>
                {project.name}{" "}
                <button className="access-btn">Access Project</button>
              </td>
              <td>{project.percentage}</td>
              <td>
                <img
                  src="https://via.placeholder.com/30"
                  alt="Owner"
                  className="owner-img"
                />
                {project.owner}
              </td>
              <td>
                <div className="tasks">
                  <span>{project.tasks.completed}</span>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: `${
                          (project.tasks.completed / project.tasks.total) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span>{project.tasks.total}</span>
                </div>
              </td>
              <td className={`status ${getStatusClass(project.status)}`}>
                {project.status}
              </td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;

