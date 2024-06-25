import "./Login.css"
import React, {useState} from "react"

const Login  = (props) => {
    let [formData, setFormData] = useState({email: "", password: ""})

    const onChange = (event)=>{
        switch (event.target.name ){
         case "email":
            // Validation part
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (event.target.value.match(validRegex)) {
                setFormData(data =>({...data, email: event.target.value}))
                console.log("Valid")

            }
            else{
                console.log("Please enter valid email")
            }
         break;
         case "password":

            // Validation part
            setFormData(data =>({...data, password: event.target.value}))
         break;

        }
    }

    const onSubmit = (e) => {
        alert(JSON.stringify(formData));
        e.preventDefault();
        
    }

    return <form className="popupContent" onSubmit={(e)=>{props.loginCallback(formData)}}>
            <p>Login</p>
            <input type="email" placeholder="Email" name="email" error="ncjnf" onChange={(e)=> {onChange(e)}}/>
            <input type="password" placeholder="Password" name="password" onChange={(e)=> {onChange(e)}}/>
            <span>email: {formData.email} password: {formData.password}</span>
            <button>Login</button>
        </form>
}


export default Login