import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteFromDb } from '../../services/service'
import Todo from '../Todo/Todo'

export default function TodosList() {

    const [todos, setTodos] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:5000/data')
        .then(res => {
            setTodos(res.data)  
        })
    },[])
 
    const deleteMethod = (id) => {
        deleteFromDb(id)
        const delFromState = todos.filter(todo => { 
            return todo._id !== id
        })
        setTodos(delFromState)
    }

    const all = todos.map(todo => {
        return (
            <div className="col-6" key={todo._id}>
                <Todo todo={todo} deleteMethod={deleteMethod} />
            </div>
        ) 
    })  

    return (
        <div className="container">
            <div className="row">
                <h3 className='display-4 m-4'>Todos List: {todos.length}
                    <span>
                        <Link to={'/create'} className='btn btn-info btn-lg  ms-4' >Create Todo </Link> 
                    </span>
                </h3>
                <div className="col-10 offset-1">
                    <div className="row">
                        {all}
                    </div>
                </div>
            </div>
        </div>
    )
}
