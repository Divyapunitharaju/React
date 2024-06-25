import React,{useEffect,useState} from 'react'
import axios from 'axios'

function Search({onSearch}){

 function handleSearch()
 {
    onSearch
 }   
  

 return(
    
    <div>
        <input type="text" placeholder="Search places" ></input>
        <button type="search" onClick={(handleSearch)=>{}}>Search</button>
        {/* {posts} */}
    </div>
 )
}

export default Search;