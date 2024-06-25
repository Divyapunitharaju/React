import { Link,useParams,useSearchParams} from "react-router-dom";



const Dashboard=(props)=>{

    let param =useParams();
    let [SearchParams]=useSearchParams();

    let name=SearchParams.get("name")
    let age=SearchParams.get("age");
    let gender=SearchParams.get("gender")

return(
    <div>
        <p>Hello World.....</p>
        {JSON.stringify(param)}
        <p>name:{name}</p>
        <p>age:{age}</p>
        <p>gender:{gender }</p>
         <Link to="/">Login</Link>

    </div>
)
}


export default Dashboard;