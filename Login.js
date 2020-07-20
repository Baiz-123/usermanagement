import React from 'react';
import { Link } from 'react-router-dom';
 

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [],
            name : '',
            password : '',
            

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({name: event.target.value})
    }
    handleChange1(event) {
     this.setState({password: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        var list = [];
        list = JSON.parse(localStorage.getItem('transactions'));
        console.log(list)
        for (var i=0; i< list.length; i++) {
        if(this.state.name == list[i].bName && this.state.password == list[i].iFSC){
            alert("You are logged in...");
        }
    }
    
    
    }
    

    render () {
        return(
<form onSubmit={this.handleSubmit}>
    <label>User Name:
        <input type="text" value={this.state.name} onChange={this.handleChange} /></label>
<label>Password:
        <input type='password' value={this.state.password} onChange={this.handleChange1} /></label>
    <button type='submit' value='submit' >Submit</button>
    </form>
        );
    }
}

export default Login;