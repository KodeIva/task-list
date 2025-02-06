import React from 'react'

const ItemsList = ({ todos, completed, completedTask, deletedTask, deleteAllTasks}) => {
  return (
    <div>
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
              
              <button className="delete bg-blue-800 text-white border-2 border-blue-800 rounded-lg my-2 mx-4 px-4 absolute right-0 hover:bg-white hover:text-blue-800 transition delay-150 duration-300 ease-in-out" onClick={() => deletedTask(id)} >Delete</button>
            </div>
          )
         })}
       </div>
       <button className='bg-blue-800 text-white mt-6 py-1 px-6 border-2 border-blue-800 rounded-lg hover:bg-white hover:border-2 hover:border-blue-800 hover:text-blue-800 transition delay-150 duration-300 ease-in-out ' onClick={deleteAllTasks} >Delete All</button>
      </div>
    }
    </div>
  )
}

export default ItemsList