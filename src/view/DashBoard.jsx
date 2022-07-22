import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DisplayTable from '../components/DisplayTable';
import { Link } from 'react-router-dom';


const DashBoard = () => {
    const [authorList, setAuthorList] = useState([])

    
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
        .then(res => setAuthorList(res.data))
        .catch(err => console.error(err))
    }, [])
    
    
    
    const refreshList = (deleteid) => {
        setAuthorList(authorList.filter((eachAuthor) => eachAuthor._id !== deleteid))
    }




    return (
        <fieldset>
            <legend>DashBoard.jsx</legend>
            <Link to={"/new"}>Add an author</Link>
            <p>We have qoutes by:</p>
            <DisplayTable authorList={authorList} updateList={refreshList} />
        </fieldset>
    )
}

export default DashBoard
