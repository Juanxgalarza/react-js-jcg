import Item from "./item.jsx";

const array = [
    {
        id: 1,
        titulo: "Carne premiun",
        price: "$1200/kg",
        src:
            "https://picsum.photos/750"
    },
    {
        id: 2,
        titulo: "Especias importadas",
        price: "$79/gr",
        src:
            "https://picsum.photos/750"
    },
    {
        id: 3,
        titulo: "Utensilios",
        price: "$buenprecio",
        src:
            "https://picsum.photos/750"
    }
];

const ItemList = () => {
    return (
        <>
            {array.map((e) => (
                <Item
                    key={e.id}
                    titulo={e.titulo}
                    price={e.price}
                    src={e.src}
                />
            ))}
        </>
    );
};

export default ItemList;