import { useContext } from "react";

import {context} from './Utils/Context'

function Child3(){
  let state=useContext(context)
  return<div>
       Child name:{state.email}
       Child age:{state.age}
  </div>
}
export default Child3;