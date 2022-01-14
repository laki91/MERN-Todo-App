import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { markToDb } from '../../services/service'
import './Todo.css'

export default function Todo({ todo, deleteMethod }) {

    const [isEnable, setEnable] = useState(todo.status === 'done' ? true : false)

    const navigate = useNavigate()

    const handleDone = () => {
        setEnable(true)
        todo.status = 'done'
        markToDb({id: todo._id, status: todo.status})
    }

    const handleUndo = () => {
        setEnable(false) 
        todo.status = 'open'
        markToDb({id: todo._id, status: todo.status})
    }

    const deleteHandler = () => {
        deleteMethod(todo._id)
        navigate('/')
    }

    return (
        <div className="card-body mt-4 ">
            <h3 className={todo.status === 'done'  ? 'complete':'incomplete' } 
                id='name' >
                {todo.name}
            </h3>
            <p  className={todo.status === 'done'  ? 'complete':'incomplete' } 
                id='description'>
                {todo.description}
            </p>
            <p  className={todo.status === 'done'  ? 'statusGreen':'StatusRed'}
                id='status'>
                <em>Status: {todo.status}</em>
            </p>
            <div className='text-center'>
                <button disabled={isEnable} onClick={deleteHandler} className='btn btn-danger btn-sm ms-4' >Delete</button>
                <button disabled={isEnable} className='btn btn-warning btn-sm ms-4 edit'>
                    <Link to={'/edit/'+ todo._id} className='edit' >Edit Todo</Link>
                </button>
                {
                    todo.status === 'open'
                    ?
                    <button onClick={handleDone} id='done' className='btn btn-success btn-sm text-end ms-4'>Done</button>
                    :
                    <button onClick={handleUndo} id='undo' className='btn  btn-sm text-end ms-4'>Undo</button>
                }
                
            </div> 

        </div> 
    )
}
