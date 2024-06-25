import React from "react"
import C from "./C";

// class B extends React.Component{
//     constructor(){
//        super();
//        this.state={age:22}
//     }

//     shouldComponentUpdate(nextProps,nextSate){
//         console.log("old name"+this.props.name+"New Name:"+nextProps.name)
//         return true;
//     }
//     render(){
//        return <div>
//        <p>B:{this.props.name}</p>
//        <button onClick={()=>{this.setState({age:123})}}>Change Age</button> 
//        <p><C {...this.props}age={this.state.age} /></p>
//        </div>
//     }
// }






class B extends React.Component{
    constructor(){
       super();
       this.state={email:"divya@gmail.com"}
    }

    shouldComponentUpdate(nextProps,nextSate){
        console.log("old name"+this.props.token+"New token:"+nextProps.token)
       return true;
    //    return false;
    }



    render(){
       return <div>
       <p>B:{this.props.token}</p>
       <button onClick={()=>{this.setState({email:"Divyaaaa@gmail.com"})}}>Change Email</button> 
       <p><C email={this.state.email}  /></p>
       </div>
    }
}
export default B;