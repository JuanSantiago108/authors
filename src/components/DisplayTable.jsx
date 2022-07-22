import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const DisplayTable = (props) => {

    const handledelete =(deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
        .then(res=> props.updateList(deleteId))
        .catch(err => console.log(err))
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th> Author </th>
                        <th> Actions available </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.authorList.map((author, i) =>{
                            return(
                                <tr key={i} >
                                    <td>  {author.fullname} </td>
                                    <td> 
                                    <button onClick={()=>handledelete(author._id)} >Delete</button>  
                                    <Link to ={`/edit/${author._id}`} > <button type="submit"> Edit</button></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default DisplayTable
