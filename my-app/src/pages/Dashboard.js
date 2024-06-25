import Header from "../components/dashboard/header";
import Left from "../components/dashboard/Left";
import './stylesheet/Dashboard.css';
import Right from "../components/dashboard/right";
import Login from "../../../login_page/src/Component/login";


function  Dashboard() {
    //   let name="test"
    //   let a=10;
    //   let b=20;
    //   const ans=()=>{
    //     return a+b;
    //   }

    // return <div className="parent">
    //        <div className="top">
    //         <Header {...props}/> {name}:{props.token} {a}+{b}={ans()}
    //         </div>            
    //         <div className="bottom">
    //             <div className="left"><Left /> </div>
    //                <div className="right">    
    //                 <Right {...props} name={"divya"} /></div>
    //              </div>
    // </div>


     return<div className="">
       <Login />
    </div>
}
export default Dashboard;