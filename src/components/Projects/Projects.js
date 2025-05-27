import "./Projects.css";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project">
                    <h3>Enterprise Management System Web Application (SIRH)</h3>
                    <p>
                        The SIRH is a comprehensive solution designed to
                        streamline and automate various human resource
                        management functions within an organization. It
                        consolidates key HR processes such as employee data
                        management, leave requests, document generation, and
                        task assignments, providing a more efficient and
                        integrated approach to human capital management.
                    </p>
                </div>
                <div className="project">
                    <h3>HR Platform (ALDRH):</h3>
                    <p>
                        The HR workflow is a solution for the validation of
                        administrative documents, tracking job applications for
                        recruitment, as well as the validation and distribution
                        of training programs and effective profile management.
                    </p>
                </div>
                <div className="project">
                    <h3>Web Application (Data inventory)</h3>
                    <p>
                        A web application dedicated to inventorying and
                        classifying data according to organizations, with the
                        ability to publish this data on the internet.
                    </p>
                </div>
                <div className="project">
                    <h3>CMDA</h3>
                    <p>
                        CMDA is an innovative platform that connects
                        professionals and showcases their expertise. Non-members
                        can share their projects and resumes, and sign up to
                        access an exclusive network. Members benefit from
                        increased visibility, send invitations, and use
                        integrated messaging. Quick connections via Google and
                        LinkedIn simplify access to this dynamic professional
                        community.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
