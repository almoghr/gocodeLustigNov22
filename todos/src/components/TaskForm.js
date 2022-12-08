import React from "react";

const TaskForm = ({inputVal, setInputVal, handleSubmit, showCompletedTodos}) => {

const handleChange = (event) => {
  setInputVal(event.target.value)
}

  return (
    <div className="taskFormArea">
      <input disabled={showCompletedTodos} value={inputVal} onChange={handleChange}/>
      <button disabled={showCompletedTodos} onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default TaskForm;
