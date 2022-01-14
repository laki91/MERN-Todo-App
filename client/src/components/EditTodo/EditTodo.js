import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editDb } from '../../services/service';

export default function EditTodo() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [editedTodo, setEditedTodo] = useState({name: '', description: ''})
    const [errors, setErrors] = useState({nameErr: '', descErr:''})

    useEffect(() => {
        axios.get('/data')  
        .then(res => {
            setEditedTodo(res.data.filter(todo => todo._id === id)[0])
        }) 
    },[]) 

    const validate = (e) => {
        let nameErr = ''
        let descErr = ''
 
        if(editedTodo.name.trim() === '' ||  editedTodo.name.trim() === null){
            nameErr = 'The Name field cannot be empty'
        }
        if(editedTodo.name.trim().length > 0 && editedTodo.name.trim().length < 3){
            nameErr= 'The Name must have minimum 3 caracters'
        }
        if(editedTodo.name.trim().length > 60){
            nameErr= 'Maximum 60 caracters'
        }
        if(editedTodo.description.trim() === '' || editedTodo.description.trim() === null){
            descErr = 'The Description field cannot be empty'
        }
        if(editedTodo.description.trim().length > 0 && editedTodo.description.trim().length < 3){
             descErr = 'The Description must have minimum 3 caracters'
        }
        if(editedTodo.description.trim().length > 250){
            descErr = 'Maximum 250 caracters' 
        }

        if(nameErr || descErr ){ 
            setErrors({nameErr: nameErr, descErr: descErr})
            return false
        }
        return true
    }

    const handleEdit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if(isValid){
            editDb(editedTodo);
            navigate('/')
        }        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1 ">
                    <div className="row">
                        <div className="col-6">
                            <h3 className='display-4 m-4 text-start'>Edit Todo</h3>
                        </div>
                        <div className="col-6 text-end">
                            <Link to={'/'} className='btn btn-lg btn-warning m-5  ' >Cancel Todo</Link>
                        </div>
                    </div>
                    <div className="col-10 offset-1">
                        <form onSubmit={handleEdit} className='mt-4'>
                        <small id='smal' className='errorMsg'>
                                {errors.nameErr}
                            </small>
                            <input type="text" 
                            placeholder='Edit Todo' 
                            className={`form-control ${errors.nameErr ? 'errorBorder' : '' }  `} 
                            onChange={e => {setEditedTodo({...editedTodo, name: e.target.value})}}
                            value={editedTodo.name}
                            />
                            <br />
                            <small id='smal' className='errorMsg'>
                                {errors.descErr}
                            </small>
                            <textarea type="text" 
                            placeholder='Edit Description' 
                            className={`form-control  ${errors.descErr ? 'errorBorder' : '' } `} 
                            onChange={e => {setEditedTodo({...editedTodo, description: e.target.value})}}
                            value={editedTodo.description}
                            />
                            <br />
                            <button className='btn btn-info form-control'>Edit Todo</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
