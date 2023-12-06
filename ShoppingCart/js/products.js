const storedProducts = localStorage.getItem('products');
let items = storedProducts ? JSON.parse(storedProducts) : [

  { id:1, name: "Nike Dunk Low Retro", 
  img: "./images/2d1b64e2-323d-41bb-8d75-6490d90ba518.webp",
  description: "El ícono del básquetbol, creado para la cancha y adaptado al estilo urbano, vuelve con detalles clásicos y un estilo de básquetbol retro.", 
  category: "Hombre",
  quantity: 0,
  price: 2599},


  { id:2, name: "Nike Tanjun",
  img: "./images/3574b192-7a10-4aa2-a084-0ff7009421d5.webp",
  description: " Confeccionado con al menos un 20% de contenido reciclado y agujetas de poliéster reciclado 100%, este modelo no pasa ningún detalle por alto.", 
  category: "Mujer",
  quantity: 0,
  price: 1699},


  { id:3, name: "Jumpman Two Trey", 
  img: "./images/f6bb75e3-f86b-4031-9265-4343b1e14bd7.webp",
  description: "Esta nueva generación de Jordan celebra el tiempo de Mike en Chicago, completado con una parte superior de cuero de alta calidad y suelas Air amortiguadas.", 
  category: "infantil",
  quantity: 0,
  price: 2469},


  { id:4, name: "Air Jordan 1 Mid", 
  img: "./images/73d56d3d-b63d-4f84-812c-ef8a58385279.webp",
  description: "Inspirada en el AJ1 original, esta edición de corte mid mantiene el look icónico que te encanta, y los colores selectos y el cuero impecable le dan una identidad distintiva", 
  category: "Hombre",
  quantity: 0,
  price: 3199},


  { id:5, name: "Nike Court Legacy Next Nature", 
  img: "./images/2535afe3-2a96-4f21-9bfc-1eff65930680.webp",
  description: "El cuero sintético y el diseño retro te permiten combinar el deporte con la moda. Haz el bien y luce bien.", 
  category: "Mujer",
  quantity: 0,
  price: 1699},


  { id:6, name: "Nike Air Force 1 '07 EasyOn", 
  img: "./images/57558712-5ebe-4abb-9984-879f9e896b4c.webp",
  description: "Más rápido que contar hasta tres: ponte el calzado de básquetbol original en un instante y sal a la cancha sin perder tiempo.", 
  category: "Mujer",
  quantity: 0,
  price: 2599},


  { id:7, name: "Nike Blazer Low '77", 
  img: "./images/f385aae2-652c-481d-a947-996b7167f4c2.webp",
  description: "El Nike Blazer Low '77 ha trascendido su propósito inicial como calzado para la cancha de básquetbol y ha llegado a la moda urbana.", 
  category: "infantil",
  quantity: 0,
  price: 1274},


  { id:8, name: "Air Jordan 1 Mid", 
  img: "./images/calzado-grandes-air-jordan-1-mid-bTcGkl.jpg",
  description: "Todas las comodidades clásicas Jordan también están ahí: Nike Air en la suela para ofrecer una pisada acolchada y una suela cupsole de goma para brindar una comodidad cotidiana.", 
  category: "infantil", 
  quantity: 0,
  price: 2649},


]