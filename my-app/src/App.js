import './App.css';
import Navbar from './componentes/navbar/Navbar';
import ItemList from './componentes/cards/itemList';
import {BrowserRouter as Router, Routes, Route, /* Link */} from 'react-router-dom';
import Error from './pages/Error';
import Landing from './componentes/landing/landin';
import Home from './pages/Home';
import Detail from './componentes/cards/ItemDetail';
import CartHandler from './componentes/cards'

function App() {

   
  return (

   <>
 <Router>
     <nav>
       <Navbar/>
     </nav>
    <Routes>
  
       <Route path ='/' element={<Home />}/>
       <Route path ='/tienda' 
       element={
       <>
        <Landing />
        <ItemList /> 
       </> 
       }
   />

       <Route path ='/products/:id' element={<Detail />} />
       <Route parh ='/cart:id' element={<CartHandler />}/>
        <Route path='*' element={<Error />} />
    </Routes>
 </Router>


    </>
  )}

export default App;
