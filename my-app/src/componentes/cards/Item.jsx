import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Counter from './Counter';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


 const Item = (props) => {



    return(

<>

<Row className='filitas' xs={1} md={4}>
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={props.src} key={props.id} />
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>
            {props.paragraph}
              </Card.Text>
              <Card.Text>
            {props.price}
              </Card.Text> 
              <Card.Text>
               ID:{props.id}

              <Button>
              <Link to='/detail'>Ver detalles</Link>
                </Button>
              </Card.Text> 
              <Card.Text>
          
            Stock disponible: {props.stock}
              </Card.Text>
              <Card.Text>
              
              </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>



</>
 ); 
}
export default Item;
