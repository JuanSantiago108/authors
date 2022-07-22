import React from 'react'
import { Link } from 'react-router-dom'
import AurthorForm from '../components/AuthorForm'

const CreatePage = () => {

    return (
        <>
            <Link to={"/"}>Home</Link>
            <AurthorForm/>
        </>
    )
}

export default CreatePage
