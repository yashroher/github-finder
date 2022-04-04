import React,{useReducer} from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
    SEARCH_USERS,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    SET_LOADING,
} from '../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
    const initialState = {
        users : [],
        user : {},
        loading : false,
        repos : []
    };

    const [state,dispatch] = useReducer(GithubReducer,initialState);

    //SEARCH USERS
    const searchUsers = async text => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${githubClientId}&client_secret=
        ${githubClientSecret}`);
        dispatch({
            type : SEARCH_USERS,
            payload : res.data.items
        })
    }

    //GET USER
    const getUser = async userName => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${userName}?client_id=
        ${githubClientId}&client_secret=
        ${githubClientSecret}`);
        dispatch({
            type : GET_USER,
            payload : res.data
        })
    }

    //GET REPOS
    const getUserRepo = async userName => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${userName}/repos?sort=created:asc&client_id=
        ${githubClientId}&client_secret=
        ${githubClientSecret}`);
        dispatch({
            type : GET_REPOS,
            payload : res.data
        })
    }

    //CLEAR USERS
    const clearUsers = () =>{
        dispatch({
            type : CLEAR_USERS
        })
    }

    //SET LOADING
    const setLoading = () => dispatch({type : SET_LOADING})

    return <GithubContext.Provider
        value = {{
            users : state.users,
            user : state.user,
            repos : state.repos,
            loading : state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepo
        }} 
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;