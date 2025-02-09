// DEscription I want to :
// 1.Add product to Cart with name and price
// 2.sum price to give final price
// 3.Restart btn
// Login
// 1.do check of Input
// 2.password

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
    
    sentence.style.display = "none";
  };
  restartBtn.onclick = function () {
    cartItems.innerHTML = "";
    sentence.style.display = "visible";
  };
});

// Login 

document.addEventListener('DOMContentLoaded', () => {

  const loginName= document.getElementById('name');
  const password= document.getElementById('password');
  const form = document.getElementById('form');
  const errorElement=document.getElementById('error');

 form.addEventListener('submit', (e) => {
  
  let messages = [];
  if (!loginName.value.trim()){
    messages.push('Name is required')
  }
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
});

function openLoginView(){
  const loginForm = document.getElementById('form');
  loginForm.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', () => {
  const userBtn= document.querySelector('#btn-user');
  if (userBtn){
  userBtn.addEventListener('click',openLoginView);
  } else {
    console.log('User button not found');
  }
});

// Hamburger Menu

function openHamburgerMenu() {
  const menuDrop= document.querySelector('section.right-nav > ul')
  menuDrop.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', function(){
  const hamburgerMenu= document.querySelector('#menu-trigger');
  if (hamburgerMenu){
    hamburgerMenu.addEventListener('click',openHamburgerMenu)
  }
})


// Shopping Cart Icon

function openShopCart(){
  const shopCart= document.querySelector('.order-list')
  shopCart.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', function(){
const btnShopCart= document.getElementById('btn-shop-cart')
btnShopCart.addEventListener('click',openShopCart);
})