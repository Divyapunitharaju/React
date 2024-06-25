import {Component} from "react"

class Auth extends  Component{
    constructor(){
        super();
        this.state={"user_count":3, "phone": "000-000-0000"}
        console.log(constructor)
    }

    shouldComponentUpdate(nextProps, nextState){
        
        
        if(nextState.user_count !== this.state.user_count){
            console.log("shouldComponentUpdate"+JSON.stringify(nextProps)+" : "+JSON.stringify(nextState))
            return true;
        }
        else{
            console.log("shouldComponentUpdate : false")
            return false;
        }
        
    }

    render(){
        console.log("Render")
        let user_name=this.props.user_name;
        let {user_age,status,users}=this.props

        // let interval = setInterval(() => {
        //     this.setState({
        //         user_count: this.state.user_count + 1,
        //         "phone": "000-000-0000"
        //     })
        // },2000)

        const countUpdate = () =>{
            console.log("Onclick")
            this.setState({
                user_count: this.state.user_count + 1,
                "phone": "000-000-0000"
            })
        }

        const html = <div>User name:{user_name} user_age {user_age}
            <p>Status : {status}</p>
            <p onClick={()=>{countUpdate()}}>count : {this.state.user_count}</p>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <tr><td>{user.name}</td> <td>{user.age}</td> <td>{user.gender}</td></tr>)}
                </tbody>
            </table>

        </div>
        return html;
    }
    componentDidMount(){
        console.log("componentDidUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
}

export default Auth