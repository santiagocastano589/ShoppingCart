const itemsContainer = document.getElementById("item-container");
const unitsElement = document.getElementById("units");
const priceElement = document.getElementById("price");
const cartEmpty = document.getElementById("cart-empty");
const totalsElement = document.getElementById("totals");

/** Crea las tarjetas de productos teniendo en cuenta lo guardado en localstorage */
function cartProducts() {
  itemsContainer.innerHTML = "";
  const products = JSON.parse(localStorage.getItem("items"));
  if (products && products.length > 0) {
    products.forEach((product) => {
      const newItem = document.createElement("div");
      newItem.classList = "card-product";
      newItem.innerHTML = `
      <img src="${product.img}">
      <h3>${product.name}</h3>
      <span>$</span><p>${product.price}</p>
      <div class="product">
      <button>-</button>
      <span class="cant">${product.quantity}</span>
      <button>+</button>
      </div>
      `;
      itemsContainer.appendChild(newItem);
      newItem
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
          const unitsElement = e.target.parentElement.getElementsByClassName("cant")[0];
          unitsElement.innerText = subtractToCart(product);
          cartProducts();
          updateTotals();
        });
      newItem
        .getElementsByTagName("button")[1]
        .addEventListener("click", (e) => {
          const unitsElement = e.target.parentElement.getElementsByClassName("cant")[0];
          unitsElement.innerText=addToCart(product);
          updateTotals();
        });
    });
  }
  // checkMessage();
  updateTotals();
  updateCart();
}

cartProducts();

/** Actualiza el total de precio y unidades de la página del carrito */
function updateTotals() {
  const products = JSON.parse(localStorage.getItem("items"));
  let units = 0;
  let price = 0;
  if (products && products.length > 0) {
    products.forEach((product) => {
      units += product.quantity;
      price += product.price * product.quantity;
    });
  }
  unitsElement.innerText = units;
  priceElement.innerText = price;
  if(price === 0) {
    resetCart();
    checkMessage();
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  itemsContainer.innerHTML = "";
  resetCart();
  checkMessage();
});

/** Muestra o esconde el mensaje de que no hay nada en el carrito */
function checkMessage() {
  const products = JSON.parse(localStorage.getItem("items"));
  cartEmpty.classList.toggle("hidden", products && products.length>0);
  totalsElement.classList.toggle("hidden", !(products && products.length>0));
}

checkMessage();
updateCart();

