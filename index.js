let imageCount = 1;
import elec from "./elec.js";
import toy from "./toy.js";


//menu bar button code
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const secondHeader = document.querySelector(".second-header");

  menuButton.addEventListener("click", function () {
    secondHeader.style.display =
      secondHeader.style.display === "none" ? "flex" : "none";
  });
});


// Section for slide Show
slideShow();
function plusSlides(num) {
  imageCount += num;
  console.log(imageCount);
}
function slideShow() {
  if (imageCount > 5) imageCount = 1;
  if (imageCount < 1) imageCount = 6;
  let slideShow = document.querySelector("#slide-window");
  slideShow.innerHTML = `
    <a class="prev" onclick="plusSlides(-2)">&#10094;</a>
    <div id="slide-image-container">
    <img src="./slide/slide${imageCount}.webp" alt="" width="100%" height="100%">
    
  </div>

    <a class="next" onclick="plusSlides(2)">&#10095;</a>
  `;
  imageCount++;
}
setInterval(slideShow, 2000);


// Section below slide show display the images this section is for best of electronics
const container = document.querySelector(".below-slide-window-container");
elec.image.forEach((imagePath, index) => {
  // Create card element
  const card = document.createElement("div");
  card.classList.add("below-slide-window-card");

  // Create image element
  const img = document.createElement("img");
  img.src = imagePath;
  img.alt = "Electronics Image";
  img.classList.add("below-slide-window-card-img");

  // Create price element
  const price = document.createElement("div");
  price.classList.add("price");
  price.textContent = "Price: $" + elec.price[index].price;

  // Create message element
  const message = document.createElement("div");
  message.classList.add("message");
  message.textContent = elec.price[index].msg;

  // Append elements to the card
  card.appendChild(img);
  card.appendChild(price);
  card.appendChild(message);

  // Append card to the container
  container.appendChild(card);
});


//section for beauty and toys more
const container1 = document.querySelector(".below-slide-window-container1");
toy.image.forEach((imagePath, index) => {
  // Create card element
  const card = document.createElement("div");
  card.classList.add("below-slide-window-card1");

  // Create image element
  const img = document.createElement("img");
  img.src = imagePath;
  img.alt = "Electronics Image";
  img.classList.add("below-slide-window-card-img1");

  // Create price and rating element

  const divRating = document.createElement("div");
  divRating.classList.add("divRating");
  const price = document.createElement("span");
  const rating = document.createElement("span");
  price.textContent = "M.R.P : $" + toy.price[index].price;
  rating.textContent = toy.price[index].rating;
  divRating.appendChild(price);
  divRating.appendChild(rating);

  // Create pay and discount element

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("divRating");
  const pay = document.createElement("span");
  const discount = document.createElement("span");
  discount.style.color = "blue";
  discount.textContent = "(Off upto " + toy.price[index].msg + " %)";
  let dis = Number(toy.price[index].msg);
  let totalPrice = Number(toy.price[index].price);
  console.log(typeof totalPrice);
  pay.textContent =
    "Pay :$" + Math.floor(totalPrice - (totalPrice * dis) / 100);
  messageDiv.appendChild(pay);
  messageDiv.appendChild(discount);

  //Create AddToCart Button
  const div = document.createElement("div");
  div.classList.add("button-div");
  const button = document.createElement("button");
  const button1 = document.createElement("button");
  button.classList.add("addtocart-button");
  button1.classList.add("addtocart-button");
  button.innerText = "Add to Cart";
  button1.innerText = "Buy";
  div.appendChild(button);
  div.appendChild(button1);
  //calling function through button
  function addToCart(params) {
    window.location.href = "./overview.html";
  }
  function buy(params) {
    window.location.href = "./overview.html";
  }
  button.addEventListener("click", addToCart);
  button1.addEventListener("click", buy);
  // Append elements to the card
  card.appendChild(img);
  card.appendChild(divRating);
  card.appendChild(messageDiv);
  card.appendChild(div);

  // Append card to the container
  container1.appendChild(card);
});
