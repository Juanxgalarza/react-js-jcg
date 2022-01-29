const Item = (props) => {
    return (
      <div
        key={props.id}
      /*   style={{
          border: "2px solid orange",
          padding: "10px",
          borderRadius: "1rem",
          margin: "20px 0"
        }} */
      >
        <h1>{props.titulo}</h1>
        <h2>{props.price}</h2>
        <img width="200" alt={props.titulo} src={props.src}  />
      </div>
    );
  };
  
  export default Item;