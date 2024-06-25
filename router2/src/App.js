
// import './App.css';
// import {
//   BrowserRouter,
//   Link,
//   Route,
//   Routes,
// } from "react-router-dom";
// import Home from './Pages/Home';
// import Terms from './Pages/Terms';
// import ContactUs from './Pages/ContactUs';
// import AboutUs from './Pages/AboutUs';

// function App() {
//   return (
//     <div className="App">
//       {/* <BrowserRouter>
//       <div className='topp'>
//       <div className='top'>
//           <Link className='nav' to='/home'>Home</Link>
//           <Link className='nav' to='/about_us'>About Us</Link>
//           <Link className='nav' to='/terms'>Terms</Link>
//           <Link className='nav' to='/contact_us'>Contact Us</Link>
//         </div>
        
//       </div>
//       <div className='bottom'>
//         <div className='right'>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/about_us" element={<AboutUs />} />
//           <Route path="/terms" element={<Terms />} />
//           <Route path="/contact_us" element={<ContactUs />} />
//         </Routes>
//         </div>
//         <div className='left'>
//         <div className='top1'>
//           <p><Link className='nav' to='/home'>Home</Link></p>
//           <p><Link className='nav' to='/about_us'>About Us</Link></p>
//           <p><Link className='nav' to='/terms'>Terms</Link></p>
//           <p><Link className='nav' to='/contact_us'>Contact Us</Link></p>
//         </div>
//         </div>
//       </div>
       
        
       
//       </BrowserRouter> */}

     

//       <BrowserRouter>
//       <div className='top2'>
//           <Link className='nav' to='/home'>Home</Link>
//           <Link className='nav' to='/about_us'>About Us</Link>
//           <Link className='nav' to='/terms'>Terms</Link>
//           <Link className='nav' to='/contact_us'>Contact Us</Link>
//       </div>
//       <div className='bottom'>
//       <div className='right'>
//           <p><Link className='nav' to='/home'>Home</Link></p>
//           <p><Link className='nav' to='/about_us'>About Us</Link></p>
//           <p><Link className='nav' to='/terms'>Terms</Link></p>
//           <p><Link className='nav' to='/contact_us'>Contact Us</Link></p>
//       </div>
//       <div className='left'>
//          <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/about_us" element={<AboutUs />} />
//           <Route path="/terms" element={<Terms />} />
//           <Route path="/contact_us" element={<ContactUs />} />
//         </Routes>
//       </div>
//       </div>
//       </BrowserRouter>
      
//     </div>
//   );
// }
// export default App;

import './App.css';
import {Link, RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './Pages/Home';
import Terms from './Pages/Terms';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Error404 from './Pages/Error404';
import Header from './Pages/Header';


const router=createBrowserRouter([
  {
    path:"/",
    element:<Header />,
    errorElement:<Error404 />,
    children:[
      {
        path:"/home",//path name always lower case
        element:<Home/>,
        children:[
          {
            
          }
        ]
      },
      {
        path:"/term",
        element:<Terms/>
      },{
        path:"/contact_us",
        element:<ContactUs/>
      },
      {
        path:"/About_us",
        element:<AboutUs/>
      }
    ]
  }
  
  
])




function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
