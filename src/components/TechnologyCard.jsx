function TechnologyCard({ technology }) {
  return (
    <div className="technology-card">
      <div className="card-top">
        <img
          className="technology-icon"
          src={technology.icon}
          alt={technology.name}
        />

        <span className="badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="card-description">
        {technology.description}
      </p>

      <div className="card-details">
        <span className="category">
          {technology.category}
        </span>

        <span>{technology.difficulty}</span>

        <span className="rating">
          ★ {technology.rating}
        </span>
      </div>

      <button className="add-stack-button">
        Add to Stack
      </button>
    </div>
  )
}

export default TechnologyCard