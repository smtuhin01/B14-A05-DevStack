import bannerStack from '../assets/banner-stack.png'
import './App.css'
import logoText from '../assets/logo-text.png'
function App() {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-container">
          <a className="brand" href="#home">
            <img src={logoText} alt="Dev Stack" />
          </a>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="auth-buttons">
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up</button>
          </div>
        </div>
      </header>
      <main>
  <section className="hero-section" id="home">
    <div className="hero-text">
      <h1>
        Build Your Ideal
        <span>Development Stack</span>
      </h1>

      <p>
        Explore frontend, backend, database, and tooling options.
        Compare them side by side and build a stack that fits your
        next project.
      </p>

      <div className="hero-buttons">
        <button className="explore-button">
          Explore Technologies
        </button>

        <button className="learn-button">
          Learn More
        </button>
      </div>
    </div>

    <div className="hero-image">
      <img src={bannerStack} alt="Development stack illustration" />
    </div>
  </section>
</main>
    </div>
  )
}
export default App