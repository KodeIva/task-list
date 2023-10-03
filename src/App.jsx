import { useState } from 'react'
import './App.css'
import { v4 as uuidv4} from 'uuid'

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

  /*function addNewTask(e) {
    e.preventDefault()
    setTodos(currentTodos => {
       return [...currentTodos,{id: uuidv4(),title: newTask, completed: completed}]
    })
    setNewTask("")
  }
*/

  console.log(todos);

  function completedTask(id, completed) {
   setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed}
      }
    })
   })
  }

  return (
    <>
    <form onSubmit={addNewTask}>
      <div>
        <label htmlFor="task">New Task</label>
        <input defaultValue={newTask} onChange={e => setNewTask(e.target.value)} id='task' type="text" />
      </div>
      <button onClick={(e)=> addNewTask(e)}>Add</button>
    </form>
    
    {
      todos.length > 0 &&  
       <>
        <h1>Tasks: </h1>
        <div className="taskList">
         {todos.map(todo => {
          const {title,id} = todo
          return (
            <div className='singleItem' key={id}>
              <input type='checkbox' checked={completed} onChange={() => completedTask(id,completed)}/>
              <h3>{title}</h3>
              <button className="delete">Delete Item</button>
            </div>
          )
         })}
       </div>
      </>
    }
    </>
  )
}

export default App
