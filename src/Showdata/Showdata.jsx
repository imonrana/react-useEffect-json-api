import React from 'react'

const Showdata = (props) => {
    const {id, title, userId, completed} = props.todo;
  return (
    <div className='text_content'>
        <h2>{userId}</h2>
        <h2>{id}</h2>
        <h2>{title}</h2>
        <h2>{completed ? "Complete" : "Not Complete"}</h2>
        

    </div>
  )
}

export default Showdata