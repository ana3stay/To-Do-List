function ToDo({ todo, toggleTask, completeTask, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </div>
            <div className="item-complete" onClick={() => completeTask(todo.id)}>
                ✓
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                X
            </div>
        </div>
    )
}

export default ToDo