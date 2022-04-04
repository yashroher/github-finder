import React ,{Component,useState,useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './users/Users';
import Search from './users/Search';
import Alert from './components/layout/Alert';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About  from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import User from './users/User';
import Home from './components/pages/Home';
import Notfound from './components/pages/Notfound';
import './App.css';


const App = () => {
  // useEffect(async ()=> {
  //   setLoading(true)
  //   const res = await axios.get(`https://api.github.com/users?client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setUsers(res.data);
  //   setLoading(false);
  // },[])
    return (
      <GithubState>
        <AlertState>
      <Router>
        <div>
          <Navbar title = "Github Finder" icon = "fab fa-github"/>
          <div className = "container">
          <Alert/>
          <Switch>
            <Route 
              exact = {true}
              path = "/"
              component = {Home}
            />
            <Route exact path = "/about" component = {About}/>
            <Route
              exact
              path = "/user/:login"
              component = {User}
            />
            <Route 
              component = {Notfound}
            />
          </Switch>
          </div>
        </div>
        </Router>
        </AlertState>
        </GithubState>
      );
}

export default App;
