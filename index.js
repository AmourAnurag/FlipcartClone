let imageCount = 1;
import elec from "./elec.js";
import toy from "./toy.js";
console.log(elec);
let images = elec.image;
console.log(images);
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
// Section below slide show


//Here you can use the `elec` object to display images, prices, etc.
const container = document.querySelector('.below-slide-window-container');

elec.image.forEach((imagePath, index) => {
    // Create card element
    const card = document.createElement('div');
    card.classList.add('below-slide-window-card');

    // Create image element
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = "Electronics Image";
    img.classList.add('below-slide-window-card-img');

    // Create price element
    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = "Price: $" + elec.price[index].price;

    // Create message element
    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = elec.price[index].msg;

    // Append elements to the card
    card.appendChild(img);
    card.appendChild(price);
    card.appendChild(message);

    // Append card to the container
    container.appendChild(card);
});
const container1 = document.querySelector('.below-slide-window-container1');

toy.image.forEach((imagePath, index) => {
    // Create card element
    const card = document.createElement('div');
    card.classList.add('below-slide-window-card1');

    // Create image element
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = "Electronics Image";
    img.classList.add('below-slide-window-card-img1');

    // Create price element
    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = "Price: $" + toy.price[index].price;

    // Create message element
    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = toy.price[index].msg;

    // Append elements to the card
    card.appendChild(img);
    card.appendChild(price);
    card.appendChild(message);

    // Append card to the container
    container1.appendChild(card);
});
