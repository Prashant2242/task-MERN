import React from 'react'

const Update = ({display}) => {
  return (
    <div className='p-5 bg-light d-flex justify-content-center align-item-start flex-column update'>
        <h3>Update your tasks</h3>
        <input type="text" className='todo-inputs my-4 w-100 p-3'/>
        <textarea className='todo-inputs w-100 p-3'/>
        <div className='gap-3'>
        <button className='btn btn-dark my-4 me-2'>Update</button>
        <button className='btn btn-danger my-4' onClick={()=>
            display("none")
        }>Close</button>
        </div>
    
    </div>
  )
}

export default Update; 


