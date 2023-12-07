const cartAccount = document.getElementById("cart-account");


function addToCart(product){

  let memory = JSON.parse(localStorage.getItem("items"));
  console.log(memory);
  let finalQuantity=0;
  if(memory===null) {
    const newProduct = newProductMemory(product)
    localStorage.setItem("items",JSON.stringify([newProduct]));
    updateCart();
    finalQuantity = 1;
  }
  else {

    const indexProduct = memory.findIndex(item => item.id === product.id)
    console.log(indexProduct);
    const newMemory = memory;
  
    if(indexProduct === -1){
      const newProduct = newProductMemory(product);
      newMemory.push(newProduct);
      finalQuantity = 1;
    } else {
    
      newMemory[indexProduct].quantity++;
      finalQuantity = newMemory[indexProduct].quantity;
    }
    localStorage.setItem("items",JSON.stringify(newMemory));
    updateCart();
    return finalQuantity;
  }
  updateCart();
}


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



function newProductMemory(product){
  const newProduct = product;
  newProduct.quantity = 1;
  return newProduct;
}

function updateCart(){
  let account = 0;
  const memory = JSON.parse(localStorage.getItem("items"));
  if(memory && memory.length > 0){
    account = memory.reduce((acum, current)=>acum+current.quantity,0)
    return cartAccount.innerText = account;
  }
  cartAccount.innerText = 0;
}

function resetCart(){
  localStorage.removeItem("items");
  updateCart();
}

updateCart();