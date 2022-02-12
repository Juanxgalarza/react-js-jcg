import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


 const Item = (props) => {



    return(

<>

<Row className='filitas' xs={2} md={4}>
 
    <Col>
      <Card>
        <Card.Img src={props.src} key={props.id} />
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
              </Card.Text> 
              <Card.Text>   
            {props.stock}
              </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>



</>
 ); 
}
export default Item;
