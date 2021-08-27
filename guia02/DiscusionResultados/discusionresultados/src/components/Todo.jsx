import React from 'react'
const Todo =({producto,index,deleteTodo,cantidad}) => {
    return (
        <>
        <div className="list">
        <h3>{cantidad}</h3>-
        <h3> {producto} </h3> <button className="btn-delete" onClick ={() => deleteTodo (index)}>x</button>
        </div>
        </>
        
    )
}
export default Todo