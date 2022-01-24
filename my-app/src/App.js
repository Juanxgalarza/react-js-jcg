import './App.css';
import Cards2 from './componentes/cards/cards2';
import Landing from './componentes/landing/landin';
import Menu from './componentes/navbar/menu';
import Counter from './componentes/itemCount/itemCount'


function App() {
  return (
   <>
 
    <Menu />
  
  <Landing />



<Counter/>

<Cards2 price='$1200/kg' titulo='Carne' class='flex' src='https://picsum.photos/896' paragraph='La carne es buena para la salud, además si lees esto puede ser que hayas entendido el sentido de la vida' number='01' />
   <Cards2 price='$79/gr' titulo='Especias' src='https://picsum.photos/750' paragraph='Las especias condimentan nuestros alimentos proporcionando gusto y cualidades únicas que tienen y portan.' number='02' />
   <Cards2 price='$8500/pack' titulo='Utensilios'paragraph='Los utensilios cambiaron la forma en que comemos, uala.' number='03' src='https://picsum.photos/790' />
   <Cards2 price='$550' titulo='Utensilios'paragraph='Los utensilios cambiaron la forma en que comemos, uala.' number='03' src='https://picsum.photos/798' />

   <Cards2 price='$5190' titulo='Utensilios'paragraph='Los utensilios cambiaron la forma en que comemos, uala.' number='03' src='https://picsum.photos/850' />
 

    </>
  )}

export default App;
