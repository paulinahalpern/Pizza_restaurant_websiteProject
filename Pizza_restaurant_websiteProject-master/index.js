// DEscription I want to :
// 1.Add product to Cart with name and price
// 2.sum price to give final price
// 3.Restart btn
// Login
// 1.do check of Input
// 2.password

// const menu = [
//   {
//     category: "Focaccia",
//     items: [
//       {
//         name: "Garlic Focaccia",
//         description: "Rosemary & sea salt & garlic",
//         price: 13.5,
//       },
//       {
//         name: "Herb Focaccia",
//         description: "Fiordilatte, oregano & sea salt",
//         price: 14.5,
//       },
//     ],
//   },
//   {
//     category: "Pasta",
//     items: [
//       {
//         name: "Tagliatelle Bolognese",
//         description: "Handmade tagliatelle with pork & beef ragu",
//         price: 27.0,
//       },
//       {
//         name: "Rigatoni All'Amatriciana",
//         description: "Rigatoni with pancetta, chilli & tomato sauce",
//         price: 27.0,
//       },
//       {
//         name: "Spaghetti Con Gamberi",
//         description: "Spaghetti with olive oil, garlic, prawn meat and parsley",
//         price: 35.0,
//       },
//       {
//         name: "Gnocchi Gorgonzola",
//         description: "Handmade gnocchi, cream, gorgonzola & walnuts",
//         price: 30.0,
//       },
//     ],
//   },
//   {
//     category: "Pizza",
//     items: [
//       {
//         name: "Margherita",
//         description: "Diced tomatoes & mozzarella, oregano",
//         price: 15.5,
//       },
//       { name: "Pepperoni", description: "Pepperoni & mozzarella", price: 16.5 },
//       { name: "Hawaiian", description: "Ham & pineapple", price: 16.5 },
//       {
//         name: "Capricciosa",
//         description: "Tomato sauce, shredded ham, mushrooms, olives, cheese",
//         price: 17.5,
//       },
//     ],
//   },
//   {
//     category: "Soft Drinks",
//     items: [
//       { name: "Mineral Water", price: 6.5 },
//       { name: "Coke", price: 5.5 },
//       { name: "Sprite", price: 5.5 },
//       { name: "Fanta", price: 5.5 },
//     ],
//   },
//   {
//     category: "Dessert",
//     items: [
//       {
//         name: "Calzoncino",
//         description: "Pillowed shaped pizza w/nutella & strawberries",
//         price: 25.0,
//       },
//       {
//         name: "Tiramisu",
//         description: "Pick me up Tuscan trifle",
//         price: 17.0,
//       },
//     ],
//   },
// ];

// Add to Cart functionality

const addToCartBtn = document.querySelectorAll(".add-item");
const cartItems = document.querySelector("#cart-content");
const productNames = document.querySelectorAll(".top-half");
const productPrices = document.querySelectorAll(".bottom-half");
const shoppingList = document.querySelector("cart-items");
const restartBtn = document.querySelector(".btn-restart");
const sumValue = document.getElementById("summary-value");

let priceTotal = 0;
addToCartBtn.forEach((element, index) => {
  element.onclick = function () {
    const sentence = document.querySelector(".add-products");
    let cartItem = document.createElement("li");
    let cartPrice = document.createElement("div");
    cartPrice.className = "cart-price";
    let itemName = productNames[index].textContent;
    let itemPrice = productPrices[index].textContent;
    cartItem.textContent = itemName;
    cartPrice.textContent = itemPrice;
    cartItems.appendChild(cartItem);
    cartItems.appendChild(cartPrice);
    priceTotal += itemPrice;
    // sumValue.innerHTML = ${`priceTotal`};
    sentence.style.display = "none";
  };
  restartBtn.onclick = function () {
    cartItems.innerHTML = "";
    sentence.style.display = "visible";
  };
});

// Search bar
// let search = document.querySelector("[data-search]");
// // let cartItems = document.querySelectorAll(".product-cart");

// search.addEventListener("input", (e) => {
//   let name = document.querySelectorAll(".top-half");
//   const value = e.target.value;
//   if (value.includes(name.textContent)) {
//     console.log("yes");
//   }
// });

// Login 
const loginName= document.getElementById('name');
const password= document.getElementById('password');
const form = document.getElementById('form');
const errorElement=document.getElementById('error')

form.addEventListener('submit', (e)=> {
  let messages = []
  if (loginName.value ==='' || loginName.value== null){
    messages.push('Name is required');
  }
  if (password.value.length< 13){
    messages.push('Password must be longer than 13 characters. ');
  }
  if (password.value.length>= 20){
    messages.push('Password must be less than 20 characters. ');
  }
  if (password.value==='password'){
    messages.push('Password cannot be password');
  }
  if (messages.length>0){
    e.preventDefault();
    errorElement.innerText= messages.join(',')
  } 
})