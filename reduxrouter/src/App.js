import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contactus from './pages/ContactUs';
import Header from './component/Header';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import ProductedRouter from './utlis/ProductedRouter';
import { placeSearch ,weatherApi} from './utlis/Apis';

// import ErrorPage from './pages/Error';


function App() {
    let params={q:"Com",usename:"Divya"}
    let res=placeSearch(params)

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/home" element={<ProductedRouter><Home /></ProductedRouter>}></Route>
          <Route path="/dashboard" element={<ProductedRouter><Dashboard /></ProductedRouter>}></Route>
          <Route path= "/about" element={<ProductedRouter><About /></ProductedRouter>}></Route>
          <Route path= "/contact" element={<ProductedRouter><Contactus /></ProductedRouter>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" errorElement={<Error />} element={<Error />}></Route>

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
