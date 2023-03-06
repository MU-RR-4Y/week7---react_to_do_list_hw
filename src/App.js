import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [tasks,setTasks] = useState([
    'Buy shopping', 
    'Clean bathroom', 
    "Car's MOT"
  ]);

  const taskNodes = tasks.map((task,index)=>{
    return <li key={index}>{task}</li>
  })




  return (
    <>
    <h1>ToDo's</h1>
    <form>
      <input type="text" />
      <label>High</label>
      <input type="radio" name='priority' value='High'/>
      <label>Low</label>
      <input type="radio" name='priority' value='Low' />
      <button >Save Item</button>
    </form>
    <ul>
      {taskNodes}
    </ul>
    </>
  );
}

export default App;
