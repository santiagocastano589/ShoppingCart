const itemContainer = document.getElementById('container');
const searchInput = document.getElementById('searchInput');


function showProducts(products) {
    itemContainer.innerHTML = '';
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

// Aqui filtro los productos por su nombre o categoria
function filterProducts(query) {
    const filteredProducts = items.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );

    showProducts(filteredProducts);
  }

  // Esta es para escuchar eventos de cambio en el input de búsqueda
  searchInput.addEventListener('input', function () {
    filterProducts(this.value);
  });




showProducts(items);
