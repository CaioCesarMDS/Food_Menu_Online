const products = [
    {
        id_order: 1,
        name: "Spicy Burguer",
        description: "Hamburguer de 250g, queijo, tomate, alface e cebola",
        price: 24.9,
        foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png",
    },
    {
        id_order: 2,
        name: "Sanduba",
        description: "Sanduiche natural, alface, tomate, pão integral e orégano",
        price: 22.0,
        foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png",
    },
    {
        id_order: 3,
        name: "Super Burguer",
        description: "Hamburguer de 300g, molho, queijo, tomate, alface e cebola",
        price: 29.9,
        foto: "https://jornadajs-food.s3.amazonaws.com/super.png",
    },
    {
        id_order: 4,
        name: "Mega",
        description: "Hamburguer de 300g, maionese, tomate, alface, queijo e cebola",
        price: 34.9,
        foto: "https://jornadajs-food.s3.amazonaws.com/mega.png",
    },
    {
        id_order: 5,
        name: "Penne",
        description:
            "Penne ao molho especial de tomates rústicos, ervas aromáticas e cebola",
        price: 27.0,
        foto: "https://jornadajs-food.s3.amazonaws.com/penne.png",
    },
    {
        id_order: 6,
        name: "Fritas",
        description: "Batata frita crocante com molho especial de maionese da casa",
        price: 14.9,
        foto: "https://jornadajs-food.s3.amazonaws.com/fritas.png",
    },
    {
        id_order: 7,
        name: "Coca-Cola Lata",
        description: "Coca-cola em lata de 300ml, trincando de gelada para você",
        price: 9.9,
        foto: "https://jornadajs-food.s3.amazonaws.com/coca.png",
    },
];

const orders = [
    { id_order: 541560, dt_order: "14/01/2024", total: 150.3 },
    { id_order: 841562, dt_order: "15/01/2024", total: 99 },
    { id_order: 887453, dt_order: "18/01/2024", total: 119.9 },
    { id_order: 985417, dt_order: "19/01/2024", total: 37.2 },
    { id_order: 995411, dt_order: "19/01/2024", total: 49.9 },
    { id_order: 985852, dt_order: "19/01/2024", total: 78.8 },
    { id_order: 998524, dt_order: "19/01/2024", total: 50.0 },
];

const cart = [
    {
        id_order: 1,
        name: "X-Tudo",
        price: 20.0,
        foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png",
        quantity: 2,
    },
    {
        id_order: 2,
        name: "Sanduba",
        price: 16.0,
        foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png",
        quantity: 1,
    },
];

export { products, orders, cart };
