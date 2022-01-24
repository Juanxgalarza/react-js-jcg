import * as React from 'react';
import Card from 'react-bootstrap/Card';
import './cards.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Cards2 = (props) => {
    return(

<>

<Row className='filitas' xs={1} md={4}>
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={props.src} key="uniqueId1" />
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>
            {props.paragraph}
              </Card.Text>
              <Card.Text>
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
export default Cards2;
