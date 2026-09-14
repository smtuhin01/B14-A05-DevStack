function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
   <div className={isAdded ? 'technology-card selected-card' : 'technology-card'}>
      <div className="card-top">
        <img
          className="technology-icon" src={technology.icon} alt={technology.name} />

        <span className="badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="card-description"> {technology.description}</p>
      

      <div className="card-details">
        <span className="category">
          {technology.category}
        </span>
        <span>{technology.difficulty}</span>
        <span className="rating">
          ★ {technology.rating}
        </span>
      </div>
      <button className="add-stack-button" onClick={() => onAdd(technology)} disabled={isAdded}>
  {isAdded ? 'Added to Stack' : 'Add to Stack'}
</button>
    </div>
  )
}
export default TechnologyCard