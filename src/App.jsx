import { useEffect, useState } from 'react'
import './App.css'
import bannerStack from '../assets/banner-stack.png'
import logoText from '../assets/logo-text.png'
import TechnologyCard from './components/TechnologyCard'
import StackSidebar from './components/StackSidebar'
function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])
  useEffect(() => {
    fetch('technologies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load technology data')
        }
        return response.json()
      })
      .then((data) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])
  function addToStack(technology) {
    const alreadyAdded = stack.find((item) => item.id === technology.id)

    if (alreadyAdded) {
      return
    }
    setStack([...stack, technology])
  }
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
        <section className="technology-section" id="technologies">
          <div className="section-heading">
            <h2>
              Explore the <span>Technologies</span>
            </h2>
            <p>
              Pick one technology per category to build your ideal stack.
            </p>
          </div>
          {loading ? (
            <p className="loading-text">Loading technologies...</p>
          ) : (
            <div className="technology-content">
              <div className="technology-grid">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={addToStack}
                    isAdded={stack.some((item) => item.id === technology.id)}
                  />
                ))}
              </div>
              <StackSidebar stack={stack} />
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
export default App