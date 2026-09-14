function StackSidebar({ stack }) {
  return (
    <div className="stack-sidebar">
      <h3>Your Stack</h3>
      <p className="selected-count">
        {stack.length} Technologies Selected
      </p>
      {stack.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
          <span>Add technologies to build your ideal stack.</span>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <img src={technology.icon} alt={technology.name} />
              <div>
                <h4>{technology.name}</h4>
                <p>{technology.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default StackSidebar