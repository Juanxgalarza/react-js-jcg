import './App.css';
import Navbar from './componentes/navbar/Navbar';
import ItemList from './componentes/cards/itemList';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Errorpage from './pages/Error';
import Landing from './componentes/landing/landin';
import ItemDetail from './componentes/cards/ItemDetail';
import Home from './pages/Home';

function App() {

   
  return (

   <>
 <Router>
     <nav>
       <Navbar/>
     </nav>
    <Routes>
  
       <Route path ='/' element={<Home />}/>
       <Route path ='/tienda' element={<>
        <Landing />
        <ItemList /> 
       </>
       }
   />
       <Route path ='/detail' element={<ItemDetail />} />
       <Route path='*' element={<Errorpage />} />
    </Routes>
 </Router>


    </>
  )}

export default App;
