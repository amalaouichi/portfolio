import React from 'react';
import './Projects.css';
import Next from '../../assets/icons/nextjs.png';
import Exp from '../../assets/icons/express.png';
import tailwind from '../../assets/icons/tailwindcss.png';
import graphql from '../../assets/icons/graphql.png';
import redus from '../../assets/icons/redus.png';
import postgress from '../../assets/icons/postgres.png';

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>SmartDoc</h3>
          <p>The project involves creating a document management application that allows users to generate templates and, from these templates, create PDF documents with automatic filling of employee information. Users can select one or more employees, and the application will automatically populate the fields of the document with the corresponding data before generating the PDF file.</p>
          <h5>Tech Stack</h5>
          <img src={Next} alt="NextJs" className="icon" /> 
          <img src={Exp} alt="NextJs" className="icon" /> 
          <img src={tailwind} alt="NextJs" className="icon" />
          <img src={graphql} alt="NextJs" className="icon" />
          <img src={redus} alt="NextJs" className="icon" />
          <img src={postgress} alt="NextJs" className="icon" />
        </div>
        <div className="project">
          <h3>ProjectEase</h3>
          <p>The project involves creating a project management application that allows users to efficiently manage their projects and associated tasks. The application offers an intuitive interface to organize tasks by project, track their status, and facilitate collaboration among team members.</p>
          <h5>Tech Stack</h5>
          <img src={Next} alt="NextJs" className="icon" /> 
          <img src={Exp} alt="NextJs" className="icon" /> 
          <img src={tailwind} alt="NextJs" className="icon" />
          <img src={graphql} alt="NextJs" className="icon" />
          <img src={redus} alt="NextJs" className="icon" />
          <img src={postgress} alt="NextJs" className="icon" />
        </div>
        <div className="project">
          <h3>LeaveManage</h3>
          <p>The project involves creating a leave and authorization management application for employees. The application allows users to submit leave requests, track the status of their authorizations, automatically calculate remaining leave balances, and receive real-time notifications at each step of the process.</p>
          <h5>Tech Stack</h5>
          <img src={Next} alt="NextJs" className="icon" /> 
          <img src={Exp} alt="NextJs" className="icon" /> 
          <img src={tailwind} alt="NextJs" className="icon" />
          <img src={graphql} alt="NextJs" className="icon" />
          <img src={redus} alt="NextJs" className="icon" />
          <img src={postgress} alt="NextJs" className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
