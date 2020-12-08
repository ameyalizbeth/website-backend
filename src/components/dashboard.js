import React, { useEffect, useState } from'react' ;
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect, withRouter} from "react-router-dom";

const Dashboard = (props)=>{
    const history = useHistory();
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [address,setAddress] = useState(null);
    const [phoneno,setPhoneno] = useState(null);
    const [username,setUsername] = useState(null);
    const [src,setSrc] = useState(null);

    const u = props.match.params.username;
    useEffect(()=>{
        fetch(`http://localhost:3000/${u}/page`).then(r=>r.json()).then(data=>{
            setName(data.name);
            setUsername(data.username);
            setEmail(data.email);
            setAddress(data.address);
            setPhoneno(data.phoneno);
            setSrc('http://localhost:3000/'+data.image)
            
            console.log(data)}).catch(e=>console.log(e));

    });

    function setimage(e){
        // e.preventDefault();
        
        var data =  new FormData();
        const  image=document.querySelector('input[type="file"]').files[0];
        data.append('data',image);
        console.log(image)
        
        fetch(`http://localhost:3000/${username}/images`,{
            method:"POST",
            
            body: data
    
        }).then(r=>r.json()).then(path=>{
            console.log(path)
            setSrc('http://localhost:3000/'+path.path)
        }).catch(err=>{
            console.log(err)
        });
    }
    return (<div>
        name:{name}
        email:{email}
        address:{address}
        phoneno:{phoneno}
        username:{username}


        <Button>CHANGE PASSWORD</Button>

        <Button>update details</Button>
        <Button>health report</Button>
        <Button onClick={()=>{history.push('/')}}>logout</Button>
        <div>
                   <form onSubmit={(e)=>{
                       setimage(e)
                   }} encType="multipart/form-data" >
                       <input type="file" name="image" id="image"/>
                       <button type="submit">set image</button>
                   </form>
               </div>

               <div>
                   
                   <img style={{
                       height:100,
                       width:100

                   }} src={src}/>
                   
                
               </div>
    </div>
    )
;
}
export default withRouter(Dashboard);