
import Navegacion from './componentes/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, /* Link */} from 'react-router-dom';
import Home from './pages/Home';
import Paginaerror from './pages/Error';
import Detail from './componentes/cards/ItemDetail';
import Context from './componentes/context/contextoGlobal';

function App() {

   
  return (

   <>
   <Context>
 <Router>
     <nav>
       <Navegacion/>
     </nav>
    <Routes>
       <Route path ='/' element={ <Home />}/>
       <Route path ='/products/:id' element={<Detail />} />
      {/*  <Route parh ='/cart' element={<CartHandler />}/> */}
        <Route path='*' element={<Paginaerror />} /> 
    </Routes>
 </Router>
  </Context>
    </>
  )}

export default App;
