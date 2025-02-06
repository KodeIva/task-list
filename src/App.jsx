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
       <div >
        <h1>Tasks: </h1>
        <div className="taskList bg-blue-200 rounded-lg text-gray-600 w-[350px] lg:w-[450px]">
         {todos.map(todo => {
          const {title,id} = todo
          return (
            <div className='singleItem flex relative w-[100%]'  key={id}>
              <input type='checkbox' className='m-2' value={completed} checked={completed} onChange={() => completedTask(!completed)}/>
              <h3 style={{textDecoration: completed ? 'line-through' : 'none'}} className='m-2 left-9'>{title}</h3>
              
              <button className="delete bg-blue-800 text-white rounded-lg my-2 mx-4 px-4 absolute right-0 hover:bg-white hover:text-blue-800 transition delay-150 duration-300 ease-in-out" onClick={() => deletedTask(id)} >Delete</button>
            </div>
          )
         })}
       </div>
       <button className='bg-blue-800 text-white mt-6 py-1 px-6 border-2 rounded-lg hover:bg-white hover:border-2 hover:border-blue-800 hover:text-blue-800 transition delay-150 duration-300 ease-in-out ' onClick={deleteAllTasks} >Delete All</button>
      </div>
    }
    </div>
    <ToastContainer position='top-left' />
    </>
  )
}

export default App
