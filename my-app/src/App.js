import './App.css';
import Navbar from './componentes/navbar/Navbar';
import ItemList from './componentes/cards/itemList';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Errorpage from './pages/Error';
import Landing from './componentes/landing/landin';

function App() {

   
  return (

   <>
 <Router>
     <nav>
       <Link to='/'>
       <Navbar/>
       </Link>
     </nav>
    <Routes>
  
       <Route path ='/' element={<Landing />}/>
       <Route path ='/tienda' element={<>
        <Landing />
        <ItemList /> 
       </>
       }
   />
       <Route path ='/nosotros' />
       <Route path='*' element={<Errorpage />} />
    </Routes>
 </Router>

{/* 
  <ItemList/> */}

    </>
  )}

export default App;
