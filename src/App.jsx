import { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import{ BiPlus } from "react-icons/bi"
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [newTask,setNewTask] = useState("")
  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState(false)

  function addNewTask(e) {
    e.preventDefault()
    if(newTask) {
      const newAddedTask = {id: uuidv4(), title:newTask}
      setTodos([...todos,newAddedTask]) 

    }
    if(!newTask) {
      toast.error('Please add task')
      return
    }
    setNewTask("")
  }

  console.log(todos);

  // To be finished
  const completedTask = (id,completed) => {
    {
       todos.map((todo) => todo.id === id ) 
       setCompleted(!completed)
       //console.log(todo.title);
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
    <>
    <div className='bg-indigo-400 flex flex-col items-center w-[100%] h-[100vh]' >
    <form className=' flex flex-col items-center mt-[10px] h-[auto] md:bg-orange-500 md:flex-row md:w-[70%] lg:w-[50%] w-[90%] p-[50px]' onSubmit={addNewTask}>
      <div>
        <input 
          className='w-[350px] m-2 p-2 rounded-lg'
          value={newTask} placeholder='Add new task ...' onChange={e => setNewTask(e.target.value)} id='task' type="text" />
      </div>
      <button className='bg-white flex justify-center rounded-lg items-center  w-[350px] h-9 text-3xl' onClick={(e)=> addNewTask(e)}><BiPlus className='text-slate-500 mt-1'/></button>
    </form>
    
    {
      todos.length > 0 &&  
       <div >
        <h1>Tasks: </h1>
        <div className="taskList" style={{background:'pink'}}>
         {todos.map(todo => {
          const {title,id} = todo
          return (
            <div className='singleItem' key={id}>
              <input type='checkbox' value={completed} checked={completed} onChange={() => completedTask(!completed)}/>
              <h3 style={{textDecoration: completed ? 'line-through' : 'none'}}>{title}</h3>
              
              <button className="delete" onClick={() => deletedTask(id)} >Delete Item</button>
            </div>
          )
         })}
       </div>
       <button onClick={deleteAllTasks} >Delete All</button>
      </div>
    }
    </div>
    <ToastContainer position='top-left' />
    </>
  )
}

export default App
