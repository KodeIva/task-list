import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <form>
      <div>
        <label htmlFor="item">New Task</label>
        <input type="text" />
      </div>
      <button>Add</button>
    </form>
    <h1>Tasks: </h1>
    </>
  )
}

export default App
