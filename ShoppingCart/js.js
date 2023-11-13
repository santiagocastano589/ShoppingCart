import { addToCart } from "./app.js";
const container = document.getElementById('item-container');


function showProducts() {

    const products = JSON.parse(localStorage.getItem("items"));
    console.log(products);
    if (products && products.length > 0) {
        console.log(products);
    products.forEach(product => {
        const newProduct = document.createElement('div');
        newProduct.classList = 'item';
        newProduct.innerHTML = `
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <span>$</span><p>${product.price}</p>
        <div class="product">
        <button>-</button>
        <span class="cant">0</span>
        <button>+</button>
        </div>
        `;
        container.appendChild(newProduct);
        newProduct.getElementsByTagName('button')[1].addEventListener('click', ()=>addToCart(product));
    });

    }
}

showProducts();
