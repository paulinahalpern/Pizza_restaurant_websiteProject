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
    // sumValue.innerHTML = ${`priceTotal`};
    sentence.style.display = "none";
  };
  restartBtn.onclick = function () {
    cartItems.innerHTML = "";
  };
});
