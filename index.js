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
const productPrice = document.querySelectorAll(".bottom-half");
const shoppingList = document.querySelector("cart-items");
const restartBtn = document.querySelector(".btn-restart");

addToCartBtn.forEach((element, index) => {
  element.onclick = function () {
    const sentence = document.querySelector(".add-products");
    let cartItem = document.createElement("li");
    let itemName = productNames[index].textContent;
    cartItem.textContent = itemName;
    cartItems.appendChild(cartItem);
    sentence.style.display = "none";
  };
  restartBtn.onclick = function () {
    cartItems.innerHTML = "";
  };
});
