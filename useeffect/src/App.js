// import logo from './logo.svg';
// import './App.css';
// import React,{useEffect,useState} from 'react';
// import axios from 'axios';

// function App(props) {
//   console.log("1. init (constructor())")

//   //state
//   let [name,setname]=useState("divya")

  
//   useEffect(() =>{
//     console.log("3.useeffect ( componentdidmount() & componentdidupdate())")
//   })
//  const weatherAPI = async() =>{
//   let config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: 'http://api.geonames.org/searchJSON?q=coimbatore&maxRows=10&username=divya',
//     headers: { }
//   };





  
//   axios.request(config)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
  
 
  
// //API call type 2 
// try{
//   const response = await axios.get('http://api.geonames.org/searchJSON?q=coimbatore&maxRows=10&username=divya',{/*header*/},{/*params*/});
//   console.log(response);
//   setname(JSON.stringify(response))
 
 

// }catch (error) {
//   console.error(error);
// }
// }

// weatherAPI();
//   return (
//       <div className="App">
//       hello world
//       {console.log("2.return (render())")}
//       {name}
     
//       </div>
  
//   );
  
//   }

// export default App;



import React,{useEffect,useState} from 'react';
import axios from 'axios';

function App(props) {
let [latitude,setLatitude]=useState();
let [longitude,setLongitude]=useState();
let [name,setName]=useState();


useEffect(()=>{
  const weatherAPI=async()=>{
    try {
      const response = await axios.get('http://api.geonames.org/searchJSON?q=coimbatore&maxRows=10&username=divya');
      let {lat,lng,name}=response.data.geonames[0];
      setLatitude(lat);
      setLongitude(lng);
      setName(name);
    } catch (error) {
      console.error(error);
    }
  }
  weatherAPI();
})  
  return (
          <div className="App">
          hello world
          {console.log("2.return (render())")}
          <h1>latitude:{latitude}</h1>
          <h1>logitude:{longitude}</h1>
          <h1>Name:{name}</h1>

          </div>
      
      );
       



}
export default App;





