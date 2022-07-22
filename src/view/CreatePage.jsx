import React from 'react'
import { Link } from 'react-router-dom'
import AurthorForm from '../components/AuthorForm'

const CreatePage = () => {

    return (
        <fieldset>
            <legend>CreatePage.jsx</legend>
            <Link to={"/"}>Home</Link>
            <AurthorForm/>
        </fieldset>
    )
}

export default CreatePage
