
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-tag">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Khalil Ullah</span>
        </h1>

        <h2>
          AI/ML Engineer
        </h2>

        <p className="hero-description">
          I build intelligent solutions using Artificial
          Intelligence, Machine Learning and Deep Learning.
          Turning data into meaningful insights and
          innovative solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

      </div>

      <div className="hero-image">
        <div className="image-circle">
          <span>AI</span>
        </div>
      </div>

    </section>
  );
}

export default Hero;
