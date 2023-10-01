import { useState } from 'react'
import './App.css'

function App() {
  const [newTask,setNewTask] = useState("")
  const [todos, setTodos] = useState([])

  function addNewTask(e) {
    e.preventDefault()
    setTodos(currentTodos => {
       return [...currentTodos,{id: crypto.randomUUID(),title: newTask, completed:false}]
    })
  }

  console.log(todos);

  return (
    <>
    <form onSubmit={addNewTask}>
      <div>
        <label htmlFor="task">New Task</label>
        <input defaultValue={newTask} onChange={e => setNewTask(e.target.value)} id='task' type="text" />
      </div>
      <button onClick={(e)=> addNewTask(e)}>Add</button>
    </form>
    
    <h1>Tasks: </h1>
    <div className="taskList">
      {todos.map(todo => {
        const {title,id} = todo
        return (
          <div className='singleItem' key={id}>
           <input type='checkbox' />
           <h3>{title}</h3>
           <button className="delete">Delete Item</button>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default App
