import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './comp/Navbar';
import Tp1_react from './comp/Tp1';
import Tp3 from './comp/Tp3';
import Notfound from './comp/Notfound';
import Tp2_react from "./comp/Tp2/Tp2";
import A from "./comp/tp4/Accueil"
import Api from "./tp5/Api"
import { useContext } from 'react';
import Contex, {Modepage} from "./darckmode/Contex"
import Home from './Home';


function App() {
  const {dark}=useContext(Modepage)
  return (
  <div className=' w-full sm:w-full ease-in-out duration-700'  style={{backgroundColor:dark?"#222"  :"white",color:dark?"#fff"  :"" }}>
  <center>
   
    <Navbar/>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Tp1" element={ <Tp1_react/>}/>
      <Route path="/Tp3" element={<Tp3/>}/>
      <Route path="/Tp4" element={<A/>}/>
      <Route path="/Tp2" element={<Tp2_react/>}/>
      <Route path="/Tp5" element={<Api/>}/>
      <Route path="*" element={<Notfound/>}/>

    </Routes> 
    
  </center><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
  );
}

export default App;
