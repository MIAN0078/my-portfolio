
function Skills() {
  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Data Analysis",
    "Natural Language Processing",
    "SQL"
  ];

  return (
    <section className="skills" id="skills">

      <div className="section-heading">
        <p>MY EXPERTISE</p>
        <h2>Technical Skills</h2>
        <span>
          Technologies and tools I work with.
        </span>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
