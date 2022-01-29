import * as React from 'react';
import Card from 'react-bootstrap/Card';
import './cards.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Item = (props) => {



    return(

<>

<Row className='filitas' xs={1} md={4}>
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={props.src} key={props.id} />
        <Card.Body>
          <Card.Title>Disfrute de: {props.titulo}</Card.Title>
          <Card.Text>
            Informate sobre:
            {props.paragraph}
              </Card.Text>
              <Card.Text>
                El valor del producto es:
            {props.price}
              </Card.Text> 
              <Card.Text>
               ID:{props.id}
            {props.price}
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
