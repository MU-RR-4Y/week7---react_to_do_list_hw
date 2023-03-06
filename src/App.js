import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [tasks,setTasks] = useState([
    'Buy shopping', 
    'Clean bathroom', 
    "Car's MOT"
  ]);
  // new variable to set temp list
  const [newTask,setNewTask] = useState('')

  //variable for list items in final return statement
  const taskNodes = tasks.map((task,index)=>{
    return <li key={index}>{task}</li>
  })
  
  //function retrieving value from updated form
  function handleChange(event){
    setNewTask(event.target.value)
  }

  //function to save a new list item
  function saveTask (event) {
    event.preventDefault();
    console.log('new item:',newTask);
    const newTasks =[...tasks, newTask];
    setTasks(newTasks);
    setNewTask('');

    
    
  }
  
  
  
  return (
    <>
    <h1>ToDo's</h1>

    <form onSubmit={saveTask}>
      <input type="text" onChange={handleChange}/>
      {/* <label>High</label>
      <input type="radio" name='priority' value='High'/>
      <label>Low</label>
      <input type="radio" name='priority' value='Low' /> */}
      <button >Save Item</button>
    </form>


    <ul>
      {taskNodes}
    </ul>
    </>
  );
}

export default App;
