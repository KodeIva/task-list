import { useState } from 'react'
import './App.css'

function App() {
  const [newTask,setNewTask] = useState("")
  const [todos, setTodos] = useState([])

  function addNewTask(e) {
    e.preventDefault()
    setTodos(currentTodos => {
       return [...currentTodos,{id: crypto.randomUUID(),title: newTask, completed:false}]
    }
    )
  }

  console.log(todos);

  return (
    <>
    <form onSubmit={addNewTask}>
      <div>
        <label htmlFor="item">New Task</label>
        <input defaultValue={newTask} onChange={e => setNewTask(e.target.value)}  type="text" />
      </div>
      <button>Add</button>
    </form>
    <h1>Tasks: </h1>
    </>
  )
}

export default App
