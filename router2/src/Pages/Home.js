import { useState } from "react";
import Java from "../Components/Java";
import Dsa from "../Components/Dsa";
import RubiOnRails from "../Components/RubiOnRails";
import NodeJs from "../Components/NodeJs";






const Home=(props)=>{
  let [page,setPage]=useState("Java")
  const loadPage=(p)=>{
        switch(p){
           case "Java":
                return <Java />
           case "dsa":
                return <Dsa />
           case "ror":
                return <RubiOnRails />
           case "node":
                 return <NodeJs />

        }
  }



return(
    <div className="Home">
        <div className="leftPanel">
                <ul>
                        <li onClick={()=>setPage("Java")}>Java</li>
                        <li onClick={()=>setPage("dsa")}>DSA</li>
                        <li onClick={()=>setPage("ror")}>ROR</li>
                        <li onClick={()=>setPage("node")}>Node JS</li>
                         
                </ul>

        </div>
      
    </div>
)

}
export default Home;