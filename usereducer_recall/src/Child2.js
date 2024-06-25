import { useContext } from "react";

import {context} from './Utils/Context'

function Child2(){
  let state=useContext(context)
  return<div>
       Child name:{state.gender}
       Child age:{state.email}
  </div>
}
export default Child2;