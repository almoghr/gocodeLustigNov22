import React from 'react'

const ShowTodos = ({showCompletedTodos, setShowCompletedTodos}) => {
  return (
    <button onClick={() => setShowCompletedTodos(!showCompletedTodos)}>
        {showCompletedTodos ? "show Todos" : "show completed"}
    </button>
)
}

export default ShowTodos