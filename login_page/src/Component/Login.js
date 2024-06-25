function Login() {
    return <div>
        <form>
        <div>
            <label>UseName</label>
            <input type="text" placeholder="Enter Username" name="username" ></input>
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required> </input>
            <button type="submit">Login</button>   
            <input type="checkbox" checked="checked"> Remember me  </input> 
            <button type="button" class="cancelbtn"> Cancel</button>   
            Forgot <a href="#"> password? </a>
        </div> 
        </form>
    </div>
    
}
export default Login;