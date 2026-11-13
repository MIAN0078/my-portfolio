
function Projects() {
  const projects = [
    {
      title: "Forest Cover Type Classification",
      category: "Machine Learning",
      description:
        "Predicts forest cover types using elevation, aspect, slope, soil type, and wilderness area through classification models.",
      tech: ["Python", "Scikit-learn", "Pandas", "Classification"],
    },
    {
      title: "Walmart Sales Forecasting",
      category: "Time Series Forecasting",
      description:
        "Analyzes historical Walmart sales data using machine learning and time-series techniques to predict future sales patterns.",
      tech: ["Python", "Machine Learning", "Time Series", "Pandas"],
    },
    {
      title: "Traffic Sign Recognition",
      category: "Deep Learning",
      description:
        "A CNN-based traffic sign recognition system trained on the GTSRB dataset to classify different traffic signs.",
      tech: ["Python", "CNN", "TensorFlow", "GTSRB"],
    },
    {
      title: "AI Chatbot",
      category: "Artificial Intelligence",
      description:
        "An intelligent chatbot designed to understand user queries and provide smart responses.",
      tech: ["Python", "NLP", "Machine Learning"],
    },
    {
      title: "House Price Prediction",
      category: "Machine Learning",
      description:
        "A machine learning model that predicts house prices using property features and historical housing data.",
      tech: ["Python", "Scikit-learn", "Pandas"],
    },
    {
      title: "Image Classification",
      category: "Deep Learning",
      description:
        "An image classification system that identifies different objects using deep learning techniques.",
      tech: ["Python", "TensorFlow", "CNN"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p>MY WORK</p>
        <h2>Featured Projects</h2>
        <span>
          Machine Learning, Artificial Intelligence and Deep Learning projects.
        </span>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="project-category">
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a href="#contact">Discuss Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
