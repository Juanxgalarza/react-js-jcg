import './App.css';
import Home from './pages/Home';
import Navbar from './componentes/navbar/Navbar';
import Tienda from './pages/Tienda'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Errorpage from './pages/Error';

function App() {

   
  return (

   <>
 <Router>
     <nav>
       <Navbar/>
     </nav>
    <Routes>
  
       <Route path ='/' element={<Home />}/>
       <Route path ='/nosotros' element={<Tienda />}/>
       <Route path ='/tienda' />
       <Route path='*' element={<Errorpage />} />
    </Routes>
 </Router>

{/* 
  <ItemList/> */}

    </>
  )}

export default App;
