import './App.css';
import Item from './componentes/cards/Item';
import Landing from './componentes/landing/landin';
import Menu from './componentes/navbar/menu';
import Counter from './componentes/cards/itemCount'
import ItemList from './componentes/itemList/itemList';
import ItemCount from './componentes/cards/itemCount';

function App() {

   
  return (

   <>
 
    <Menu />
  
  <Landing />
  <ItemList />


<Counter productCant='12' stock={12}/>

<Item   price='$1200/kg' titulo='Carne' class='flex' src='https://picsum.photos/896' paragraph='' number='01' />
  
<Counter productCant='22' stock={22} />

   <Item price='$79/gr' titulo='Especias' src='https://picsum.photos/750' paragraph='' number='02' />
  
<Counter productCant='12' stock={12} />

   <Item price='$8500/pack' titulo='Utensilios'paragraph='' number='03' src='https://picsum.photos/790' />
  
<Counter productCant='4' stock={4} />

   <Item price='$550' titulo='Utensilios'paragraph='Los utensilios cambiaron la forma en que comemos, uala.' number='03' src='https://picsum.photos/798' />

   
<Counter productCant='1' stock={1} />

<ItemCount /> 

   <Counter productCant='17' stock={17} />

    </>
  )}

export default App;
