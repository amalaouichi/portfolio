import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

const projectData = [
    {
        id: "sirh",
        title: "Enterprise Management System Web Application (SIRH)",
        description:
            "The SIRH is a comprehensive solution designed to streamline and automate HR processes...",
        accentColor: "rgba(120, 53, 131, 0.8)",
    },
    {
        id: "aldrh",
        title: "HR Platform (ALDRH)",
        description: "The HR workflow helps validate administrative documents.",
        accentColor: "rgba(76, 201, 240, 0.8)",
    },
    {
        id: "data-inventory",
        title: "Web Application (Data inventory)",
        description:
            "A platform for classifying and publishing organizational data online.",
        accentColor: "rgba(255, 107, 129, 0.8)",
    },
    {
        id: "cmda",
        title: "CMDA",
        description:
            "An innovative platform to connect professionals, share projects, and increase visibility.",
        accentColor: "rgba(29, 209, 161, 0.8)",
    },
];

const Projects = () => {
    const navigate = useNavigate();
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const handleViewMore = (id) => {
        navigate(`/projects/${id}`);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <section id="projects" ref={ref}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6 },
                    },
                    hidden: { opacity: 0, y: 30 },
                }}>
                Projects
            </motion.h2>

            <motion.div
                className="project-list"
                initial="hidden"
                animate={controls}
                variants={containerVariants}>
                {projectData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project"
                        variants={itemVariants}
                        whileHover="hover"
                        custom={index}
                        style={{ "--accent-color": project.accentColor }}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <motion.button
                            className="view-more-button"
                            onClick={() => handleViewMore(project.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            View More
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
