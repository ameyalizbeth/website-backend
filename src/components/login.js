import React,{useEffect,useState} from'react' ;
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect, withRouter, Link} from "react-router-dom";

const Login = ()=>{
 const history = useHistory();
    
    function Log(e){
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        fetch(`http://localhost:3000/login`,{
            method:"POST",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:username,
                password:password
               

          
    
              })
            })

    .then(r=>{
        if(r.status == 200){
            history.push(`/${username}/page`);
        }
    }).catch(err=>{
        console.log(err)
    });
        
        
    }


    return(
        <div>
            <form onSubmit={(e)=>{Log(e)}}>
                <input type="text" name="username" id="username" placeholder="enter username"/>
                <input type="password" name="password" id="password" placeholder="enter password"/>
                <button type="submit">LOGIN</button>
            </form>

            dont have an account .<Link to="/signup">SIGNUP</Link>
        </div>
    );

}


export default withRouter(Login);