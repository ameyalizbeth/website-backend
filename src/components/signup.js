import React,{useEffect,useState} from'react' ;
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect, withRouter, Link} from "react-router-dom";

const Signup = ()=>{
    const history = useHistory();

    
    function Sign(e){
        e.preventDefault();
        
        const  name=document.getElementById('name').value;
          const  email=document.getElementById('email').value;
          const  phoneno=document.getElementById('phoneno').value;
          const  address=document.getElementById('address').value;
         
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        fetch(`http://localhost:3000/signup`,{
            method:"POST",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:username,
                password:password,
                name:name,
                email:email,
                address:address,
                phoneno:phoneno,

          
    
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
            <form   onSubmit={(e)=>{Sign(e)}}>
                <input type="text" name="name" id="name" placeholder="enter your name"/>
                <input type="email" name="email" id="email" placeholder="enter your email"/>
                <input type="text" name="address" id="address" placeholder="enter your address"/>
                <input type="number"  name="phoneno" id="phoneno" placeholder="enter your phoneno"/>
                <input type="text" name="username" id="username" placeholder="enter your username"/>
                <input type="password" name="password" id="password" placeholder="enter your password"/>
               
              
            
                <button type="submit">SIGNUP</button>
            </form>
           

            
        </div>
    );

}


export default withRouter(Signup);