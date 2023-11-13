const items = [

    { id:1, name: "erefv", 
    img: "./images/AirForce1kid.jpg",
    description: "zapatos muy elegantes para niño", 
    category: "infantil", stock: 10, 
    quantity: 0,
    price: 111111},


    { id:2, name: "rr",
    img: "./images/AirForce1kid.jpg",
    description: "zapatos muy elegantes para niño", 
    category: "infantil", stock: 16, 
    quantity: 0,
    price: 111111},


    { id:3, name: "vv", 
    img: "./images/AirForce1kid.jpg",
    description: "zapatos muy elegantes para niño", 
    category: "infantil", stock: 30, 
    quantity: 0,
    price: 111111},


    { id:4, name: "w", 
    img: "./images/AirForce1kid.jpg",
    description: "zapatos muy elegantes para niño", 
    category: "infantil", stock: 10, 
    quantity: 0,
    price: 111111},


    { id:5, name: "l", 
    img: "./images/AirForce1kid.jpg",
    description: "zapatos muy elegantes para niño", 
    category: "infantil", stock: 40, 
    quantity: 0,
    price: 111111},


    { id:6, name: "hg", 
    img: "./images/AirForce1kid.jpg",
    description: "zapatos muy elegantes para niño", 
    category: "infantil", stock: 60, 
    quantity: 0,
    price: 111111},


    { id:7, name: "Veloziraptor", 
    img: "./images/AirForce1kid.jpg",
    description: "zapatos muy elegantes para niño", 
    category: "infantil", stock: 45, 
    quantity: 0,
    price: 111111},
]

alert("nvkjdnsnd");
const itemContainer = document.getElementById('container');

function showProducts(products) {
    products.forEach(product => {
        const newProduct = document.createElement('div');
        newProduct.classList = 'item-card';
        newProduct.innerHTML = `
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.category}</p>
        <spam>${product.stock}</spam>
        <p>${product.price}</p>
        <button>Agregar Al Carrito</button>
        `;
        itemContainer.appendChild(newProduct);
        newProduct.getElementsByTagName('button')[0].addEventListener('click', ()=>addToCart(product));
    });
}


showProducts(items);


function addToCart(product) {
    const memory = JSON.parse(localStorage.getItem("items"));
    console.log(memory);

    if (memory==null) {
        const newProduct = newProductMemory(product);
        localStorage.setItem("items",JSON.stringify([newProduct]));
    }else{
        const indexProduct = memory.findIndex(item => item.id === product.id);
        console.log(indexProduct);
        const newMemory = memory;
        if (indexProduct === -1) {
            newMemory.push(newProductMemory(product));
            console.log(newMemory);
        }else{
            newMemory[indexProduct].quantity++;
        }
        localStorage.setItem("items",JSON.stringify(newMemory));
    }

    updateCart();
}

function newProductMemory(product) {
    const newProduct = product;
    newProduct.quantity = 1;
    return newProduct;
}


const cartAccount = document.getElementById("account");
function updateCart() {
    const memory = JSON.parse(localStorage.getItem("items"));
    const account = memory.reduce((acum,current) => acum+current.quantity,0);
    cartAccount.innerText = account;
}

updateCart();

export{addToCart};