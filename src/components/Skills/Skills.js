import React from 'react';
import './Skills.css';

const skills = [
  'JavaScript', 'Java', 'PHP', 'React Native', 'C#', 'Python', 
  'HTML/CSS', 'Jinja2', 'PrimeFaces', 'ReactJs', 'Symfony', 
  'Flask', 'Spring', 'JSF', 'Next.js', 'WordPress'
];

const Skills = () => {
  return (
    <section id="skills">
      <h2> My Skills</h2>
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
