import React from "react";
import { BiTrash } from "react-icons/bi";
import { MdDoneOutline } from "react-icons/md";
const Todo = ({ title, handleComplete, handleRemove, isCompleted, id }) => {

    
  return (
    <div className="todoContainer">
      {isCompleted ? (
        <s className={"marginMin"}>{title}</s>
      ) : (
        <span className={"marginMin"}>{title}</span>
      )}
      <div className="marginMin">
        <button onClick={() => handleRemove(id)}>
          <BiTrash />
        </button>
        {!isCompleted && <button onClick={() => handleComplete(id)}>
          <MdDoneOutline />
        </button>}
      </div>
    </div>
  );
};

export default Todo;
