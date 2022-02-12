import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';
import {Container, Navbar, Badge, FormControl, Nav, Dropdown} from 'react-bootstrap';
const Navegacion = () => {
  let carrito = 5;

  return(

<Navbar bg='dark' variant='dark' style={{height: 80}}> 
<Container>
  <Navbar.Brand> 
    <Link to="/">Home</Link>
    </Navbar.Brand>
    <Navbar.Text className='buscador'>
      <FormControl
       style={{width: 500}}
        placeholder='Busca tu producto'
        className='m-auto' />
    </Navbar.Text>
    <Nav>
      <Dropdown >
        <Dropdown.Toggle variant='success'>
          <ShoppingCartIcon />
          <Badge>{carrito.lenght}</Badge>
        </Dropdown.Toggle>
        <Dropdown.Menu style ={{minWidth: 370}}>
          <span style={{padding: 10}}>Carrito Vacio!</span>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>

 
</Container>


</Navbar>
  )




}
export default Navegacion;