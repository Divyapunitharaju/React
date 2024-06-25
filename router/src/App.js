
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';


const router=createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },{
    path:"/dashboard/:package",
    element:<Dashboard/>
  },
  {
    path:"/profile/:search/search",
    element:<Dashboard/>
  },
  {
    path:"/dashboard/:test/:testtext",
    element:<Dashboard/>
  },
])




function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
