import React from "react";
import "./Projects.css";
import Next from "../../assets/icons/nextjs.png";
import Exp from "../../assets/icons/express.png";
import tailwind from "../../assets/icons/tailwindcss.png";
import graphql from "../../assets/icons/graphql.png";
import redus from "../../assets/icons/redus.png";
import postgress from "../../assets/icons/postgres.png";
import Java from "../../assets/icons/java.jpg";
import Mysql from "../../assets/icons/mysql.jpg";
import sqlserver from "../../assets/icons/sql.jpg";
import hibernate from "../../assets/icons/hiber.jpg";
import python from "../../assets/icons/python.jpg";
import jq from "../../assets/icons/jquery.jpg";
import js from "../../assets/icons/js.jpg";
import flask from "../../assets/icons/flask.png";


const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Enterprise Management System Web Application (SIRH)</h3>
          <p>
            The SIRH is a comprehensive solution designed to streamline and
            automate various human resource management functions within an
            organization. It consolidates key HR processes such as employee data
            management, leave requests, document generation, and task
            assignments, providing a more efficient and integrated approach to
            human capital management.
          </p>
          <h5>Tech Stack</h5>
          <img src={Next} alt="NextJs" className="icon" />
          <img src={Exp} alt="NextJs" className="icon" />
          <img src={tailwind} alt="NextJs" className="icon" />
          <img src={graphql} alt="NextJs" className="icon" />
          <img src={redus} alt="NextJs" className="icon" />
          <img src={postgress} alt="NextJs" className="icon" />
        </div>
        <div className="project">
          <h3>HR Platform (ALDRH):</h3>
          <p>
            The HR workflow is a solution for the validation of administrative
            documents, tracking job applications for recruitment, as well as the
            validation and distribution of training programs and effective
            profile management.
          </p>
          <h5 className="marginTop">Tech Stack</h5>
          <img src={Java} alt="Java" className="iconJpg" />
          <img src={Mysql} alt="Mysql" className="iconJpg" />
          <img src={sqlserver} alt="sqlserver" className="iconJpg" />
          <img src={hibernate} alt="hibernate" className="icon" />
        </div>
        <div className="project">
          <h3>Web Application (Data inventory)</h3>
          <p>
            A web application dedicated to inventorying and classifying data
            according to organizations, with the ability to publish this data on
            the internet.
          </p>
          <h5 className="marginTopp">Tech Stack</h5>
          <img src={python} alt="python" className="iconJpg" />
          <img src={Mysql} alt="Mysql" className="iconJpg" />
          <img src={jq} alt="jq" className="iconJpg" />
          <img src={js} alt="js" className="iconJpg" />
          <img src={flask} alt="flask" className="iconJpg" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
