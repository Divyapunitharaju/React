
import './App.css';
import Search from './Component/Search';
import {useState,useEffect} from 'react'
import axios from 'axios'


function App() {

  const [posts,setPosts]=useState();

  useEffect(()=>{ 
    const API = async() =>{
     
         try{
      const response = await axios.get('http://api.geonames.org/searchJSON?q=coimbatore&maxRows=10&username=divya',{/*header*/},{/*params*/});
      console.log(response);
      setPosts(response.data)
    }catch (error) {
      console.error(error);
    }
  }
  API();

  })


  return (
    <div className="App">
      {/* <Dropdown /> */}
      {posts}
      <Search />
    </div>
  );
}

export default App;
