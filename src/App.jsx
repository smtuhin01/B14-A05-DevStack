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
        <section id="home">
          
        </section>
      </main>
    </div>
  )
}

export default App