import axios from "axios";

export const addMethod = (body) => {
    axios.post('http://localhost:5000/create', body)
}

export const deleteFromDb = (body) => {
    axios.post('http://localhost:5000/delete', {id: body} )
}

export const editDb = (body) => {
    axios.post('http://localhost:5000/edit', body)
}

export const markToDb = (body) => {
    axios.post('http://localhost:5000/mark',  body)
}  