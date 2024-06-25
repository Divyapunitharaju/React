import D from "./D";


const C=(props)=>{
    // return <div>
    //     C:name{props.name} Age{props.age}
    //     <D {...props}/>
    // </div>



    return <div>
        C:Email : {props.email}
        <D {...props}/>
    </div>
}
export default C;