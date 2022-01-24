import * as React from 'react';
import './cards.scss'
import Stack from '@mui/material/Stack';

const Cards = (props) => {
     return(

<>
<Stack direction="column" spacing={0}>
  
        
<div className="container">

  <div className="card">
    <div className="face face1">
      <div className="content">
        <span className="stars"></span>
        <h2 className="carne">{props.titulo}</h2>
        <p className="carne">{props.paragraph}</p>

      </div>
    </div>
    <div className="face face2">
      <h2>{props.number}</h2>
    </div>
  </div>
</div>
</Stack>
  </> 
  ); 
}
export default Cards;