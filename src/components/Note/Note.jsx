import React from 'react'

const Note = ({title,content,id,handleDelet}) => {
    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content} </p>
            <button onClick={()=>handleDelet(id)} >Delete</button>
            
        </div>
    )
}

export default Note
