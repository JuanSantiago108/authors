import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AurthorForm = () => {
    const [fullname, setFullName] = useState("")
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`,{
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
        <>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name :</label>
                    <input type="text" name="fullname" value={fullname} onChange={(e) => setFullName(e.target.value)} />
                    {errors.fullname}
                </div>
                <button type="submit"> Submit</button>
                <Link to ="/" > <button type="submit"> Cancel</button> </Link> 
            </form>
        </>
    )
}

export default AurthorForm
