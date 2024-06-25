import "./Signup.css"

const Signup  = ({callback}) => {


    return <form className="SignUpPopupContent" onSubmit={()=> {callback()}}>
            <p>Signup</p>
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="password" placeholder="Re-type Password" name="retypepassword" />
            <button >Signup</button>
        </form>
}


export default Signup
