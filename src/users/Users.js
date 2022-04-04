import React, { Component,useContext } from 'react'
import Useritem from './Useritem'
import PropTypes from 'prop-types'
import Spinner from '../components/layout/Spinner'
import GithubContext from '../context/github/GithubContext'

const Users =  () => {
    const githubContext = useContext(GithubContext);
    const {loading,users} = githubContext;

    if(loading){
        return <Spinner />
    }else{
        return (
            <div style = {Userstyle}>
                {users.map(user => (
                    <Useritem key = {user.login} user = {user}/>
                ))}
            </div>
        )
    }
}

Users.propTypes = {
    repos : PropTypes.array.isRequired,
    getUserRepo : PropTypes.func.isRequired, 
}

const Userstyle = {
    display : "grid",
    gridTemplateColumns : "repeat(3,1fr)",
    gridGap : "1rem"
}

export default Users
