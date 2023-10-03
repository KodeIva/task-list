import { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import{ BiPlus } from "react-icons/bi"

function App() {
  const [newTask,setNewTask] = useState("")
  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState(false)

  function addNewTask(e) {
    e.preventDefault()
    if(task) {
      const newAddedTask = {id: uuidv4(), title:newTask}
      setTodos([...todos,newAddedTask])
    }
    setNewTask("")
  }

  console.log(todos);

  // To be finished
  const completedTask = (id,completed) => {
    {
       todos.map((todo) => todo.id !== id) 
      
      setCompleted()
    }
   }

 const deletedTask = (id) => {
   let deletedItem = todos.filter((item) => item.id !== id)
   setTodos(deletedItem)
  } 
  
 const deleteAllTasks = () => {
  setTodos([])
 }


  return (
    <div className='bg-indigo-400 w-[100%] h-[100vh]' >
    <form onSubmit={addNewTask}>
      <div>
        <label htmlFor="task">New Task</label>
        <input value={newTask} onChange={e => setNewTask(e.target.value)} id='task' type="text" />
      </div>
      <button className='bg-white flex justify-center align-middle  w-20 h-9 text-3xl' onClick={(e)=> addNewTask(e)}><BiPlus className='text-slate-500 mt-1'/></button>
    </form>
    
    {
      todos.length > 0 &&  
       <>
        <h1>Tasks: </h1>
        <div className="taskList" style={{background:'pink'}}>
         {todos.map(todo => {
          const {title,id} = todo
          return (
            <div className='singleItem' key={id}>
              <input type='checkbox' value={completed} checked={completed} onChange={() => completedTask(id,completed)}/>
              <h3>{title}</h3>
              <button className="delete" onClick={() => deletedTask(id)} >Delete Item</button>
            </div>
          )
         })}
       </div>
       <button onClick={deleteAllTasks} >Delete All</button>
      </>
    }
    </div>
  )
}

export default App
