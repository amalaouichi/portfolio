import "./Skills.css";

const skills = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "Express.js ",
    "ReactJs",
    "Next.js",
    "nest.js",
    "Bootstrap",
    "Tailwind CSS",
    "PostgreSQL",
    "MySQL",
    "RESTful APIs",
    "GraphQL",
    "Java",
    "PHP",
    "C#",
    "Python",
    "Jinja2",
    "PrimeFaces",
    "Symfony",
    "Flask",
    "Spring",
    "JSF",
    "Material UI",
    "Git",
];

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
