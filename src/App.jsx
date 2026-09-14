import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import bannerStack from '../assets/banner-stack.png'
import logoText from '../assets/logo-text.png'
import hamburgerIcon from '../ui/hamburger.png'
import TechnologyCard from './components/TechnologyCard'
import StackSidebar from './components/StackSidebar'
function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
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
      toast.warning(technology.name + ' is already in your stack.')
      return
    }
    setStack([...stack, technology])
    toast.success(technology.name + ' added to your stack.')
  }
  function removeFromStack(id) {
    const selectedTechnology = stack.find((item) => item.id === id)
    const updatedStack = stack.filter((item) => item.id !== id)
    setStack(updatedStack)
    toast.info(selectedTechnology.name + ' removed from your stack.')
  }
  function removeAllStack() {
    setStack([])
    toast.info('All technologies were removed from your stack.')
  }
  return (
    <div>
      <header className="navbar">
        <div className="navbar-container">
          <button
            className="menu-button"onClick={() => setMenuOpen(!menuOpen)}>       
            <img src={hamburgerIcon} alt="Menu" />
          </button>
          <a className="brand" href="#home"> <img src={logoText} alt="Dev Stack"/></a>
          <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
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
      <p>Explore frontend, backend, database, and tooling options.Compare them side by side and build a stack that fits your
              next project.</p>
            <div className="hero-buttons">
              <button className="explore-button">Explore Technologies</button>
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
              <StackSidebar stack={stack} onRemove={removeFromStack} onRemoveAll={removeAllStack}/>          
            </div>
          )}
        </section>
      </main>
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-brand">
            <img src={logoText} alt="Dev Stack" />
            <p>Curated tools, technologies, and resources for developers building modern software.</p>
 
            <div className="social-links">
              <a href="https://github.com" target="_blank">GitHub</a>
              <a href="https://x.com" target="_blank">Twitter</a>
              <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Product</h4>
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="light"
      />
    </div>
  )
}
export default App