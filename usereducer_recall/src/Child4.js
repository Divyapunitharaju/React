import { useContext } from "react";

import {context} from './Utils/Context'

function Child4(){
  let state=useContext(context)
  return<div>
       Child name:{state.name}
       Child age:{state.phone}
  </div>
}
export default Child4;