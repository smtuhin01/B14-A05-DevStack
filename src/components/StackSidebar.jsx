function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="stack-sidebar">
      <h3>Your Stack</h3>
      <p className="selected-count">
        {stack.length} Technologies Selected
      </p>
      {stack.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
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
              <button className="remove-item" onClick={() => onRemove(technology.id)} > × </button>

            </div>
          ))}
        </div>
      )}
      <button
        className="remove-all-button" onClick={onRemoveAll} disabled={stack.length === 0}>Remove All</button>

    </div>
  )
}
export default StackSidebar