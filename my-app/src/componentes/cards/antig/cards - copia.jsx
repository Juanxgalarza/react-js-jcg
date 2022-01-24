import * as React from 'react';
import './cards.scss'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const Cards = () => {
  const [counter3, setCounterC] = React.useState(0);
  const [counter2, setCounterB] = React.useState(0);
  const [counter1, setCounterA] = React.useState(0);


  const counterC = () => {
    setCounterC(counter3 + 1);
  };

  const counterB = () => {
    setCounterB(counter2 + 1)

  }

  const counterA = () => {
    setCounterA(counter1 + 1)

  }

    return(



<>
<div className="container">

  <div className="card">
    <div className="face face1">
      <div className="content">
        <span className="stars"></span>
        <h2 className="carne">Carne</h2>
        <p className="carne">La carne es buena para la salud, además si lees esto puede ser que hayas entendido el sentido de la vida</p>
 {/*        <Fab color="primary" aria-label="add" onClick={counterC}>
        <AddIcon />{counter3}
      </Fab> */}
      </div>
    </div>
    <div className="face face2">
      <h2>01</h2>
    </div>
  </div>
{/* 
  <div className="card">
    <div className="face face1">
      <div className="content">
        <span className="stars"></span>
        <h2 className="especias">Especias</h2> 
        <p className="especias">Las especias condimentan nuestros alimentos proporcionando gusto y cualidades únicas que tienen y portan.</p>
    
        <Fab color="primary" aria-label="add" onClick={counterB}>
        <AddIcon />{counter2}
      </Fab>

      </div>
    </div>
    <div className="face face2">
      <h2>02</h2>
    </div>
  </div>

  <div className="card">
    <div className="face face1">
      <div className="content">
        <span className="stars"></span>
        <h2 className="utensilios">Utensilios</h2>
        <p className="utensilios">Los utensilios simplifican la tarea de comer de forma tal que construyeron hábitos alimenticios particulares alrededor de cada uno de ellos, además les debemos la existencia de la sopita.</p>
        <Fab color="primary" aria-label="add" onClick={counterA}>
        <AddIcon />{counter1}
      </Fab>
      </div>
    </div>
    <div className="face face2">
      <h2>03</h2>
    </div>
  </div>

  </>
    */}
    
    
    </div>
    );
    
    
; 
}
export default Cards;