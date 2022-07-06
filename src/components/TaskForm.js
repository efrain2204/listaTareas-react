import React,{useState} from "react";
import '../style-sheets/TaskForm.css';
import {v4 as uuidv4} from 'uuid';

function TaskForm(props) {
  const [input, setInput] = useState('');

  const managedChange = e =>{
    setInput(e.target.value);
  };

  const managedSend = e =>{
    e.preventDefault();
    const taskNew = {
      id:uuidv4(),
      text: input,
      completada: false
    }
    props.onSubmit(taskNew);
    setInput('');
  };
  return(
    <form
      className='task-form'
      onSubmit={managedSend}
    >
      <input
        className='task-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        value={input}
        onChange={managedChange}
      />
      <button className='task-button'>
        Agregar tarea
      </button>
    </form>
  );
}

export default TaskForm;
