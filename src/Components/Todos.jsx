import React from 'react'

const Todos = ({todos, deleteTodo, setId}) => {
  return (
    <>
    <div className='container text-center '>
      <table className="table table-dark ">
  <thead>
    
    <tr>
  
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {
    todos.map((d)=>{
      return(
        <>
        <tbody key={d.id}>
        <tr>
         
          <td>{d.title}</td>
          <td>{d.description}</td>
          <td>
            <button className='btn btn-warning mx-2 ' onClick={()=>setId(d.id)}>Edit</button>
            <button className='btn btn-danger' onClick={()=>deleteTodo(d.id)}>Delete</button>
          </td>
        </tr>
     
      </tbody>
      </>
      )
    })
  }
 
</table>
</div>
    </>
  )
}

export default Todos
