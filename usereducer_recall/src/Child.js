import { useContext } from "react";

import {context} from './Utils/Context'

function Child(){
  let state=useContext(context)
  return<div>
       Child name:{state.name}
       Child age:{state.age}
  </div>
}
export default Child;