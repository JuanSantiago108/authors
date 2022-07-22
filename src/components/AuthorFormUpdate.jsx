import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const AuthorFormUpdate = () => {
    const [fullname, setFullName] = useState()
    const [errors, setErrors] = useState({})

    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                const author = res.data
                setFullName(author.fullname)
            })
            .catch(err => console.log(err))

    }, [id])



    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`,{
            fullname
        })
            .then(res => navigate("/"))
            .catch(err => {
                console.log(err)
                // const errMsgArr= []
                const errResponse = err.response.data.errors
                for (const eachKey in errResponse) {
                    errResponse[eachKey] = errResponse[eachKey].message
                    // errMsgArr.push(errResponse[eachKey].message)
                }
                console.log(errResponse)
                setErrors(errResponse)
            })
    }

    return (
        <fieldset>
            <legend>AuthorFormUpdate.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name :</label>
                    <input type="text" name="fullname" value={fullname} onChange={(e) => setFullName(e.target.value)} />
                    {errors.fullname}
                </div>
                <button type="submit"> Submit</button>
                <Link to ="/" > <button type="submit"> Cancel</button> </Link> 
            </form>
        </fieldset>
    )
}

export default AuthorFormUpdate
