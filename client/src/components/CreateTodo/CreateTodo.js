import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addMethod } from '../../services/service'

import './CreateTodo.css'

export default function CreateTodo() {

    const [createTodo, setCreateTodo] = useState({name: '', description:'', status: 'open'})
    const [errors, setErrors] = useState({nameErr: '', descErr:''})

    const navigate = useNavigate()

    const validate = (e) => {
        let nameErr = ''
        let descErr = ''
 
        if(createTodo.name.trim() === '' ||  createTodo.name.trim() === null){
            nameErr = 'The Name field cannot be empty'
        }
        if(createTodo.name.trim().length > 0 && createTodo.name.trim().length < 3){
            nameErr= 'The Name must have minimum 3 caracters'
        }
        if(createTodo.name.trim().length > 60){
            nameErr = 'Maximum 60 caracters'
        }
        if(createTodo.description.trim() === '' || createTodo.description.trim() === null){
            descErr = 'The Description field cannot be empty'
        }
        if(createTodo.description.trim().length > 0 && createTodo.description.trim().length < 3){
             descErr = 'The Description must have minimum 3 caracters'
        }
        if(createTodo.description.trim().length > 250){
            descErr = 'Maximum 250 caracters'
        } 

        if(nameErr || descErr ){ 
            setErrors({nameErr: nameErr, descErr: descErr})
            return false
        }
        return true
    } 
    
    const handleCreate = (e) => {
        e.preventDefault()
        const isValid = validate()
        if(isValid){
            addMethod(createTodo)
            navigate('/')
        }        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1 ">
                    <div className="row">
                        <div className="col-6">
                            <h3 className='display-4 m-4 text-start'>Create Todo</h3>
                        </div>
                        <div className="col-6 text-end">
                            <Link to={'/'} className='btn btn-lg btn-warning m-5  ' >Cancel Todo</Link>
                        </div>
                    </div>
                    <div className="col-10 offset-1">
                        <form onSubmit={handleCreate} className='mt-4'>
                            <small id='smal' className='errorMsg'>
                                {errors.nameErr}
                            </small>
                            <input type="text" 
                            placeholder='Add Todo' 
                            className={`form-control ${errors.nameErr ? 'errorBorder' : '' }  `} 
                            onChange={e => setCreateTodo({...createTodo, name:e.target.value})} 
                            /><br />
                            <small id='smal' className='errorMsg'>
                                {errors.descErr}
                            </small>
                            <textarea type="text" 
                            placeholder='Add Description' 
                            className={`form-control  ${errors.descErr ? 'errorBorder' : '' } `}
                            onChange={e => setCreateTodo({...createTodo, description:e.target.value})} 
                            /><br />
                            <button className='btn btn-info form-control'>Add</button>
                        </form>
                    </div>   
                </div>
            </div>  
        </div>
    )
}
