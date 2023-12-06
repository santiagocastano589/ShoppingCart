const itemContainer = document.getElementById('container');
const searchInput = document.getElementById('searchInput');


function showProducts(products) {
    itemContainer.innerHTML = '';
    products.forEach(product => {
        const newItem = document.createElement('div');
        newItem.classList = 'item-card';
        newItem.setAttribute('data-product-id', product.id);
        newItem.innerHTML = `
        <img src="${product.img}">
        <div class="info">
        <h3 class="name">${product.name}</h3>
        <p class="description">${product.description}</p>
        <p class="category">Categoria: ${product.category}</p>
        <p class="price">$${product.price}</p>
        <button>Agregar Al Carrito</button>
        <button onclick="editProduct(${product.id})">Editar</button>
        <button onclick="deleteProduct(${product.id})">Eliminar</button>

        </div>
        `;
        itemContainer.appendChild(newItem);
        newItem.getElementsByTagName('button')[0].addEventListener('click', ()=>addToCart(product));
    });
}


function filterProducts(query) {
    const filteredProducts = items.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );

    showProducts(filteredProducts);
  }


  searchInput.addEventListener('input', function () {
    filterProducts(this.value);
  });



const productModal = document.getElementById('productModal');
let editingProductId = null;



function openAddProductModal() {
    editingProductId = null;
    clearProductModalFields();
    productModal.style.display = 'block';
}

function closeProductModal() {
    productModal.style.display = 'none';
}

function clearProductModalFields() {
    document.getElementById('productName').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productDescription').value = '';
    document.getElementById('productImage').value = '';
    document.getElementById('productPrice').value = '';
}

function saveProduct() {
    const productName = document.getElementById('productName').value;
    const productCategory = document.getElementById('productCategory').value;
    const productDescription = document.getElementById('productDescription').value;
    const productImage = document.getElementById('productImage').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    if (editingProductId !== null) {
        
        const editedProductIndex = items.findIndex(product => product.id === editingProductId);
        items[editedProductIndex] = {
            ...items[editedProductIndex],
            name: productName,
            category: productCategory,
            description: productDescription,
            img: productImage,
            price: productPrice
        };
    } else {
        
        const newProductId = items.length + 1;
        items.push({
            id: newProductId,
            name: productName,
            category: productCategory,
            description: productDescription,
            img: productImage,
            price: productPrice,
            quantity: 0
        });
    }
    localStorage.setItem('products', JSON.stringify(items));

    showProducts(items);
    closeProductModal();
}

function editProduct(productId) {
    editingProductId = productId;
    const productToEdit = items.find(product => product.id === productId);
    document.getElementById('productName').value = productToEdit.name;
    document.getElementById('productCategory').value = productToEdit.category;
    document.getElementById('productDescription').value = productToEdit.description;
    document.getElementById('productImage').value = productToEdit.img;
    document.getElementById('productPrice').value = productToEdit.price;

    productModal.style.display = 'block';
}

function deleteProduct(productId) {
    console.log('Eliminando producto con ID:', productId);
    const productIndex = items.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        
      items.splice(productIndex, 1);
      localStorage.setItem('products', JSON.stringify(items));
      showProducts(items);
    }
}


showProducts(items);