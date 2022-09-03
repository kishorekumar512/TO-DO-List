import './App.css';
import { useState } from 'react';
import {Switch, Route, Link } from 'react-router-dom';

const Task = [
  {
    box: <input type="checkbox"></input>,
    text: "Create theme"
  },
  {
    box: <input type="checkbox"></input>,
    text: "Work on wordpress"
  },
  {
    box: <input type="checkbox"></input>,
    text: "Organize office main department"
  },
  {
    box: <input type="checkbox"></input>,
    text: "Error solve in HTML template"
  },
];

export default function App() {
  return (
    <div className="App">
      <h1><u>To-Do List</u></h1>
      <hr />

      <Link style={{padding: "10px"}} to="/all">All</Link>
      <Link style={{padding: "10px"}} to="/active">Active</Link>
      <Link style={{padding: "10px"}} to="/completed">Completed</Link>
      <br /><br />

      <Switch>

        <Route path="/completed">
          <Add />
        </Route>

        <Route path="/active">
          <Add />
        </Route>

        <Route path="/all">
          <Add />
        </Route>

      </Switch>
    </div>
  );
}

function Add(){
  const [add, setAdd] = useState(Task);
  const [taskName, setTaskName] = useState("");
  const addTask = ()=>{
    const newTask = {
      text: taskName 
    }
    setAdd([...add, newTask])
    setTaskName("");
  };

  return(
    <div>
      <div>
      <input onChange={(event) => setTaskName(event.target.value)} placeholder="New task..." value={taskName} />
      <button onClick={addTask}>Add Task</button>
      </div>
      <div className="ui">

      {add.map((brand, index) => (
        <ul>
          <li>
          <Counter
            key={index}
            box={brand.box}
            text={brand.text}
             />
             </li>
             </ul>
        ))}

      </div>
    </div>
  )
}

function Counter(props){
return(
  <div>
    <h3>{props.box}{props.text}</h3>
  </div>
)
}

