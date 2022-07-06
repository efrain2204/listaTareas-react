import React,{useState} from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import '../style-sheets/ListOfTask.css';

function ListOfTask(){
  const[tasks, setTasks] = useState([]);

  const addTask = task  => {
    if(task.text.trim()){
      task.text = task.text.trim();
      const taskUpdated = [task, ...tasks];
      setTasks(taskUpdated);
    }
  };
  const deleteTask = id =>{
    const taskUpdated = tasks.filter(task => task.id !== id);
    setTasks(taskUpdated);
  };
  const completeTask = id => {
    const taskUpdated = tasks.map(task =>{
      if (task.id === id){
        task.completada = !task.completada;
      }
      return task;
    });
    setTasks(taskUpdated);
  };
  // fragmentos
  return(
    <>
      <TaskForm onSubmit={addTask}/>
      <div className='task-list-container'>
        {
          tasks.map( (task)=>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completada={task.completada}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        }
      </div>
    </>
  );
}

export default ListOfTask;
