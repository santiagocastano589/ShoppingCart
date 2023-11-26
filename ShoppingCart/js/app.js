const itemContainer = document.getElementById('container');

function showProducts(products) {
    products.forEach(product => {
        const newItem = document.createElement('div');
        newItem.classList = 'item-card';
        newItem.innerHTML = `
        <img src="${product.img}">
        <div class="info">
        <h3 class="name">${product.name}</h3>
        <p class="description">${product.description}</p>
        <p class="category">Categoria: ${product.category}</p>
        <spam class="stock">Disponible: ${product.stock}</spam>
        <p class="price">$${product.price}</p>
        <button>Agregar Al Carrito</button>
        </div>
        `;
        itemContainer.appendChild(newItem);
        newItem.getElementsByTagName('button')[0].addEventListener('click', ()=>addToCart(product));
    });
}

showProducts(items);
