import React from "react";
import '../style-sheets/Task.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'

function Task({ id, text, completada, completeTask, deleteTask}){
  return(
    <div className={ completada ? 'task-container completada':'task-container'}>
      <div
        className='task-text'
        onClick={()=> completeTask(id)}
      >
        {text}
      </div>
      <div
        className='task-container-icons'
        onClick={() => deleteTask(id)}
      >
        <AiOutlineCloseCircle className='task-icon'/>
      </div>
    </div>
  );
}


export default Task;
