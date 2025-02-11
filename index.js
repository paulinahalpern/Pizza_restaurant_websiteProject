const addToCartBtn = document.querySelectorAll(".add-item");
const cartItems = document.querySelector("#cart-content");
const productNames = document.querySelectorAll(".top-half");
const productPrices = document.querySelectorAll(".bottom-half");
const restartBtn = document.querySelector(".btn-restart");
const sumValue = document.getElementById("summary-value");
const itemCountDisplay=document.querySelector('.item-count')

let priceTotal = 0;
let itemCount=0;

addToCartBtn.forEach((element, index) => {
  element.onclick = function () {
    const sentence = document.querySelector(".add-products");
    
    let cartItemContainer = document.createElement("li");
    cartItemContainer.className = "cart-item"; 
    
    let cartItem = document.createElement("span");
    let cartPrice = document.createElement("span");
    cartPrice.className = "cart-price";

    let itemName = productNames[index].textContent;
    let itemPrice = parseFloat(productPrices[index].textContent.replace(/[^0-9.]/g, "")); 
    // This finds the first number, and replaces the entire string with the matched number.



    cartItem.textContent = itemName;
    cartPrice.textContent = `$${itemPrice.toFixed(2)}`;
    // toFixed method converts a number to a string.

    cartItemContainer.appendChild(cartItem);
    cartItemContainer.appendChild(cartPrice);
    
    cartItems.appendChild(cartItemContainer);

    priceTotal += itemPrice;
    itemCount++;
    sumValue.textContent = `$${priceTotal.toFixed(2)}`;
    itemCountDisplay.textContent = `Items: ${itemCount}`
  };
  restartBtn.onclick = function () {
    cartItems.innerHTML = "";
    priceTotal = 0;
    itemCount= 0;
    sumValue.textContent = "$0.00";
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
  
  if (password.value.length< 13){
    messages.push('Password must be longer than 13 characters. ');
  }else if (password.value.length >= 20){
    messages.push('Password must be less than 20 characters. ');
  }else if(password.value==='password'){
    messages.push('Password cannot be password');
  }
  if (messages.length>0){
    e.preventDefault();
    errorElement.innerText= messages.join(',<br>')
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
    hamburgerMenu.addEventListener('click',openHamburgerMenu);
  }
});


// Shopping Cart Icon

function openShopCart(){
  const shopCart= document.querySelector('.order-list')
  shopCart.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', function(){
const btnShopCart= document.getElementById('btn-shop-cart')
btnShopCart.addEventListener('click',openShopCart);
});
