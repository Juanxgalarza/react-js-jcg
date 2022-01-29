
const ItemListContainer1 = () => {
  const obj =  {
    id: 0,
  nombre: '',
  price: 1200,
  img: ''};


  


  const getCortes = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(obj), 200)
    });
  };


const getData = async () => {
  try {
    const result = await getCortes();
    console.log(result);

  } catch (error) {
    console.log('Error');
  }
}
getData();


  }
  
  
  
    export default ItemListContainer1;