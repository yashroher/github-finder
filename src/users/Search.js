import React, { Component,useState,useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../context/github/GithubContext';
import AlertContext from '../context/alert/AlertContext';

const Search = () =>{
   const [text,setText] = useState('');
   const githubContext = useContext(GithubContext);
   const alertContext = useContext(AlertContext);
   const onSubmit = (e) => {
        e.preventDefault();
        if(text == ""){
            alertContext.setAlert("Please Type Something","light")
        }
        else{
            githubContext.searchUsers(text);
            setText("")
        }
    } 
    const onChange = e => setText(e.target.value)
    return (
        <div>
            <form onSubmit = {onSubmit} className = "form">
                    <input 
                    type = "text"
                    name = "text"
                    placeholder = "Search User..."
                    value = {text}
                    onChange = {onChange}
                />
                <input 
                    type = "submit"
                    value = "Search"
                    className = "btn btn-dark btn-block"
                />
            </form>
            {githubContext.users.length>0 && <button
                className = "btn btn-light btn-block"
                onClick = {githubContext.clearUsers}
                >
                Clear
            </button>}
        </div>
    )
}

// export class Search extends Component {
//     state = {
//         text : ""
//     }

//     static propTypes = {
//         searchUsers : PropTypes.func.isRequired,
//         clearUser : PropTypes.func.isRequired,
//         showClear : PropTypes.bool.isRequired,
//         setAlert : PropTypes.func.isRequired,
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         if(this.state.text == ""){
//             this.props.setAlert("Please Type Something","light")
//         }
//         else{
//             this.props.searchUsers(this.state.text);
//             this.setState({text : ""})
//         }
//     }
//     onChange = e => this.setState({[e.target.name] : e.target.value})


//     render() {
//         const {clearUsers,showClear} = this.props

//         return (
//             <div>
//                 <form onSubmit = {this.onSubmit} className = "form">
//                     <input 
//                         type = "text"
//                         name = "text"
//                         placeholder = "Search User..."
//                         value = {this.state.text}
//                         onChange = {this.onChange}
//                     />
//                     <input 
//                         type = "submit"
//                         value = "Search"
//                         className = "btn btn-dark btn-block"
//                     />
//                 </form>
//                 {showClear && <button
//                     className = "btn btn-light btn-block"
//                     onClick = {clearUsers}
//                 >
//                     Clear
//                 </button>}
//             </div>
//         )
//     }
// }

Search.propTypes = {
    setAlert : PropTypes.func.isRequired,
}

export default Search
