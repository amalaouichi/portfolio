import { useParams, Link } from "react-router-dom";
import "./Projects.css";

const projectData = {
    sirh: {
        title: "Enterprise Management System Web Application (SIRH)",
        description:
            "The SIRH is a comprehensive solution designed to streamline and automate various human resource management functions within an organization. It consolidates key HR processes such as employee data management, leave requests, document generation, and task assignments, providing a more efficient and integrated approach to human capital management.\n\nThe Advantages of an HRIS\nThe main benefit of an HRIS (Human Resources Information System) is to simplify and optimize HR tasks through four key advantages:\n\n1. Process Automation: Automates basic functions like payroll generation and schedule management, freeing HR teams for higher-value tasks.\n\n2. HR Optimization: Centralizes HR data to reduce errors and provides proactive recommendations for organizational improvements (e.g., work time distribution, training).\n\n3. Improved Monitoring: Generates dashboards and reports that offer optimal oversight of company management, facilitating data-driven decisions.\n\n4. Employee Empowerment: Enables employees to actively participate in administrative processes through self-service modules (training requests, profile updates).",
    },
    aldrh: {
        title: "HR Platform (ALDRH)",
        description:
            "Structured Collaborative Process\n" +
            "The ALDRH platform offers a clear and seamless workflow for tasks involving multiple participants (managers, HR staff, employees). Each task is broken down into precise steps and assigned to the appropriate individuals, ensuring rigorous follow-up and smooth execution.\n\n" +
            "Multi-level Validation\n" +
            "Thanks to integrated validation workflows, tasks requiring multiple approvals (e.g., a manager followed by HR) are automatically managed. Each participant validates their part directly through the platform, ensuring complete traceability and a clear distribution of responsibilities.\n\n" +
            "Improved Communication and Transparency\n" +
            "All participants can view the task progress, required actions, and next steps. This promotes better communication across different roles and avoids oversights or duplicate efforts.\n\n" +
            "Increased Productivity and Accountability\n" +
            "Each profile knows exactly what tasks they need to complete, with reminders and notifications to ensure that validations and actions are performed within the given timeframe.\n\n" +
            "Adaptable to Specific Needs\n" +
            "The platform is configurable to adapt to the company’s specific processes, incorporating roles and responsibilities for each profile within the workflow.",
    },

    "data-inventory": {
        title: "Web Application (Data Inventory)",
        description:
            "Data Inventory and Classification\n" +
            "This web application helps inventory and classify data to determine the quantity of data available or unavailable for each organization and ministry. This process ensures a comprehensive overview of existing and missing data.\n\n" +
            "Open Data and Citizen Access\n" +
            "The inventory enables citizens to access information published by organizations affiliated with ministries. Data is made available on an open-source platform, promoting transparency and public engagement.\n\n" +
            "Discussion Space for Stakeholders\n" +
            "A dedicated discussion space allows users and ministry stakeholders to comment on the published data. This interaction encourages dialogue and collaborative refinement of the data provided.\n\n" +
            "Streamlined Data Classification\n" +
            "The application facilitates the classification of data collected by each organization, simplifying access to and understanding of the information shared.",
    },

    cmda: {
        title: "CMDA",
        description:
            "Professional Networking and Expertise Showcase\n" +
            "CMDA is an innovative platform that connects professionals and highlights their expertise. It enables non-members to share their projects and resumes, while encouraging them to join and unlock access to an exclusive network.\n\n" +
            "Enhanced Visibility and Communication\n" +
            "Members benefit from increased visibility, sending invitations to others, and using the integrated messaging system for seamless communication.\n\n" +
            "Easy Sign-In with Google and LinkedIn\n" +
            "Quick connections via Google and LinkedIn make it easy for users to join this dynamic professional community and start collaborating right away.",
    },
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectData[id];

    if (!project) {
        return <p>Project not found.</p>;
    }

    return (
        <div className="project-detail">
            <div className="detailscord">
                <Link to="/projects">
                    <button className="back-btn">← Back to Projects</button>
                </Link>

                <h3 className="titre">{project.title}</h3>
                <p className="project-description">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectDetail;
