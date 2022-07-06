import './App.css';
import ListOfTask from "./components/ListOfTask";

function App() {
  return (
    <div className="app-task">
      <div className="list-task-main">
        <h1>Mis tareas</h1>
        <ListOfTask />
      </div>
    </div>
  );
}

export default App;
