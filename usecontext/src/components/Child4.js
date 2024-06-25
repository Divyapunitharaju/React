import Child5 from "./Child5"
function Child4(){
    return  <div style={{"background-color":"red"}}>
    Hello Child4
    Child5:<Child5 />
  </div>
}
export default Child4