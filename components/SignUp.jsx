import '../styles/signup.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';



const Signup = () => {
     let navigate = useNavigate()
    
        // const [name, setName] = useState("");
        // const [email, setEmail] = useState("");
        // const [password, setPassword] = useState("");
        // const [confirmPassword, setConfirmPassword] = useState("");
      
        const name = useRef();
        const email = useRef();
        const password = useRef();
        const confirmPassword = useRef();
      
        const signup = (e) => {

            let data={
                name:name.current.value,
                email:email.current.value,
                password:password.current.value,
                confirmPassword:confirmPassword.current.value

            }
            if(data.name && data.email && data.password && (data.password == data.confirmPassword)){
                axios.post('http://localhost:4000/signup',data)
                .then((res)=>{
                    alert(res.data.message) // this is message from backend
                    navigate('/') // navigate to signin page 
                })
            } else{
                alert('invalid credentials')
            }
        //   event.preventDefault();
        //   console.log("Name:", name);
        //   console.log("Email:", email);
        //   console.log("Password:", password);
        //   console.log("Confirm Password:", confirmPassword);
        };
      
    return ( 
        <div className="Sign_Up">
        <div className="forms">
       <h1>Signup</h1>
        
           <form action="" onSubmit={signup}>
           <div className="name">
           <input  style={{width:"350px"}} name="name" type="text" ref={name} placeholder="Your Name" /> <br />
           </div>



               <div className="email">
               <input style={{width:"350px"}} name="email" type="text" ref={email} placeholder="Your Email" /> <br />
               </div>

                <div className="password">
<input   style={{width:"350px"}} name="password"type="text" ref={password} placeholder="Password" /> <br />
</div>

<div className="confirmpassword">
<input  style={{width:"350px"}} name="confirmpassword"type="text" ref={confirmPassword} placeholder="Repeat Your password" /> <br />
</div>

<div className="check">
<input type="checkbox" />
<label className='mx-3' htmlFor="">I agree all statements in  <a href="">Terms of Service</a> </label>
</div>

<div className="butt">
<button type='submit' className="btn btn-outline-primary mt-3">Register</button>
</div>
</form>
</div>

<div className="Right_part">
<div className="image">
<img width="300px" height="290px" src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" />
</div>
<div className="links">
<Link className='mt-3' to="/signin">I am already member</Link>
</div>
</div>

</div>
);
}

export default Signup;