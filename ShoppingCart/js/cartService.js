const cartAccount = document.getElementById("cart-account");

/* ------------ Toma un objeto producto o un objeto con al menos un ID y lo agrega al carrito ------------ */
function addToCart(product){
  //Reviso si el producto está en el carrito.
  let memory = JSON.parse(localStorage.getItem("items"));
  console.log(memory);
  let finalQuantity=0;
  //Si no hay localstorage lo creo
  if(memory===null) {
    const newProduct = newProductMemory(product)
    localStorage.setItem("items",JSON.stringify([newProduct]));
    updateCart();
    finalQuantity = 1;
  }
  else {
    //Si hay localstorage me fijo si el artículo ya está ahí
    const indexProduct = memory.findIndex(item => item.id === product.id)
    console.log(indexProduct);
    const newMemory = memory;
    //Si el producto no está en el carrito lo agrego
    if(indexProduct === -1){
      const newProduct = newProductMemory(product);
      newMemory.push(newProduct);
      finalQuantity = 1;
    } else {
      //Si el producto está en el carrito le agrego 1 a la cantidad.
      newMemory[indexProduct].quantity++;
      finalQuantity = newMemory[indexProduct].quantity;
    }
    localStorage.setItem("items",JSON.stringify(newMemory));
    updateCart();
    return finalQuantity;
  }
  updateCart();
}




/** Resta una unidad de un producto del carrito */
function subtractToCart(product){
  let memory = JSON.parse(localStorage.getItem("items"));
  let finalQuantity = 0;
  const indexProduct = memory.findIndex(item => item.id === product.id)
  let newMemory = memory;
  newMemory[indexProduct].quantity--;
  finalQuantity = newMemory[indexProduct].quantity;
  if(finalQuantity === 0){
    newMemory.splice(indexProduct,1)
  };
  localStorage.setItem("items",JSON.stringify(newMemory));
  updateCart();
  return finalQuantity;
}




/** Agrega cantidad a un objeto producto */
function newProductMemory(product){
  const newProduct = product;
  newProduct.quantity = 1;
  return newProduct;
}

/** Actualiza el número del carrito del header */
function updateCart(){
  let account = 0;
  const memory = JSON.parse(localStorage.getItem("items"));
  if(memory && memory.length > 0){
    account = memory.reduce((acum, current)=>acum+current.quantity,0)
    return cartAccount.innerText = account;
  }
  cartAccount.innerText = 0;
}

/** Reinicia el carrito */
function resetCart(){
  localStorage.removeItem("items");
  updateCart();
}

const searchInput = document.getElementById("bar");


function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm);
  });

}

searchInput.addEventListener("input", filterProducts);


updateCart();