import { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import{ BiPlus } from "react-icons/bi"
import { ToastContainer, toast } from 'react-toastify'
import ItemsList from './ItemsList'

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
    <div className='bg-green-50 flex flex-col items-center w-[100%] h-[100vh]' >
    <form className=' flex flex-col items-center mt-[10px] h-[auto] w-[90%] p-[50px]' onSubmit={addNewTask}>
      <div className='flex flex-col items-center bg-white lg:flex-row'>
        <input 
          className='w-[350px] m-2 p-2 rounded-lg bg-blue-100 text-white'
          value={newTask} placeholder='Add new task ...' onChange={e => setNewTask(e.target.value)} id='task' type="text" />
        <button className='bg-blue-100 m-2 text-white flex justify-center rounded-lg items-center  w-[350px] h-9 text-3xl' onClick={(e)=> addNewTask(e)}><BiPlus className='text-slate-500 mt-1'/></button>
      </div>
      
    </form>
    
    {
      todos.length > 0 &&  
        <ItemsList todos={todos} completed={completed} completedTask={completedTask} deletedTask={deletedTask} deleteAllTasks={deleteAllTasks} />
    }

   
    </div>
    <ToastContainer position='top-left' />
    </>
  )
}

export default App
