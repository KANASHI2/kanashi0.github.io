var mySwiper = new Swiper(".swiper-container", {
  speed: 1000,
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true,
  },
  zoom: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
});

let prevSwiper = document.querySelector(".swiper-button-prev");
prevSwiper.addEventListener("click", function () {
  mySwiper.autoplay.start();
});
let startSwiper = document.querySelector(".swiper-button-next");
startSwiper.addEventListener("click", function () {
  mySwiper.autoplay.start();
});

var mySwipern = new Swiper(".swiper-products", {
  spaceBetween: 15,
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },

  speed: 200,
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-nextt",
    prevEl: ".swiper-button-prevv",
  },
  zoom: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
var mybtnnes = new Swiper(".add-btn", {
  slideToClickedSlide: false,
});

let prevSwipern = document.querySelector(".swiper-button-prev");
prevSwipern.addEventListener("click", function () {
  mySwiper.autoplay.start();
});
let startSwipern = document.querySelector(".swiper-button-next");
startSwipern.addEventListener("click", function () {
  mySwiper.autoplay.start();
});

var mySwipernn = new Swiper(".swiper-information", {
  slidesPerView: 3,
  spaceBetween: 15,
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },

  speed: 200,
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-nexttt",
    prevEl: ".swiper-button-prevvv",
  },
  zoom: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
var mySwipernnn = new Swiper(".Featured-Products", {
  slidesPerView: 3,
  spaceBetween: 15,
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },

  speed: 200,
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-nextttt",
    prevEl: ".swiper-button-prevvvv",
  },
  zoom: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
var mySwipernnnn = new Swiper(".swiper-blog", {
  slidesPerView: 3,
  spaceBetween: 15,
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },

  speed: 200,
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-nexttttt",
    prevEl: ".swiper-button-prevvvvv",
  },
  zoom: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
var mySwipernnnnn = new Swiper(".lastest-products", {
  spaceBetween: 15,
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },

  speed: 200,
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-nextttttt",
    prevEl: ".swiper-button-prevvvvvv",
  },
  zoom: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
var mySwipernnnnnn = new Swiper(".clinets-feedback-content", {
  slidesPerView: 1,

  speed: 200,
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-nexttttttt",
    prevEl: ".swiper-button-prevvvvvvv",
  },
  zoom: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

let allBtns = document.querySelectorAll(".add-btn");
let productsName = document.querySelectorAll(".product-sale");
let alertBtn = document.querySelector(".btn-alert");
let closeAlert = document.querySelector(".close-alert");
let cartNum = document.querySelector(".cart-num");
let alertContinue = document.querySelector(".continue-alert");
let body = document.querySelector(".body");
let overLayer = document.querySelector(".dark-layer");
let checkNum = document.querySelector('.check-num');
let navCart = document.querySelector(".cart-navbar");
let productsCart = document.querySelector(".cart-products");
let img1 = document.querySelectorAll(".img-1");
let price = document.querySelectorAll(".price");
let myCart = document.querySelector(".nav-cart");
let closeNavCart = document.querySelector(".close-nav-cart");
let navNum = document.querySelector(".nav-num");
let subtotalTot = document.querySelector(".total-price")

let wishNum = document.querySelector(".wishlist-num");
let heart = document.querySelectorAll(".heartme");
let wishlistNum = parseInt(localStorage.getItem("wishlistNum")) || 0;

for (let s = 0; s < heart.length; s++) {
  heart[s].addEventListener("click", function () {
    if (heart[s].src !== "http://example.com/../../../Downloads/hea2rt.png") {
      heart[s].src = "../../../Downloads/hea2rt.png";
      wishlistNum += 1;
      localStorage.setItem("wishlistNum", wishlistNum.toString());
      localStorage.setItem("heart" + s, "true");
      wishlistNum.textContent = wishlistNum;
      wishNum.textContent = wishlistNum; 
    }
  });

  if (localStorage.getItem("heart" + s) === "true") {
    heart[s].src = "../../../Downloads/hea2rt.png";
  }
}

wishlistNum.textContent = wishlistNum;
wishNum.textContent = wishlistNum; 

let compare = document.querySelector(".compare-num")
let reload = document.querySelectorAll(".reloaded");
let compareNum = parseInt(localStorage.getItem("compareNum")) || 0;

for (let x = 0; x < reload.length; x++) {
  reload[x].addEventListener("click", function () {
    if (reload[x].src !== "http://example.com/../../../Downloads/tick.png") {
      reload[x].src = "../../../Downloads/tick.png";
      compareNum += 1;
      localStorage.setItem("compareNum", compareNum.toString());
      localStorage.setItem("reload" + x, "true");
      compareNum.textContent = compareNum;
      compare.textContent = compareNum;
    }
  });

  if (localStorage.getItem("reload" + x) === "true") {
    reload[x].src = "../../../Downloads/tick.png";
  }
}

compareNum.textContent = compareNum;
compare.textContent = compareNum;

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

cartNum.textContent = cartItems.length;

navNum.textContent = cartItems.length;

checkNum.textContent = cartItems.length

function addItemToCart(itemName, itemImg, itemPrice) {
const existingItem = cartItems.find(item => item.name === itemName);

if (existingItem) {
existingItem.quantity += 1;
} else {
let cartItem = {
name: itemName,
image: itemImg,
price: itemPrice,
quantity: 1
};

cartItems.push(cartItem);
}

localStorage.setItem("cartItems", JSON.stringify(cartItems));

cartNum.textContent = cartItems.length;

navNum.textContent = cartItems.length;

checkNum.textContent = cartItems.length;
}
function loadCartItems() {
  productsCart.innerHTML = "";
  let subtotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const itemPrice = price[i].textContent;
    const priceValue = parseFloat(itemPrice.match(/\d+(\.\d+)?/)[0]);
    subtotal += priceValue;

    let node = document.createElement(`div`);
    let text = document.createElement("div");
    let name = document.createElement("a");
    let pricea = document.createElement("p");
    let imgs = document.createElement("img");
    let item = cartItems[i].name;
    let prices = price[i].childNodes[0].textContent;
    node.classList.add("item");
    imgs.classList.add("src");
    imgs.src = img1[i].src;
    name.appendChild(document.createTextNode(item));
    pricea.appendChild(document.createTextNode(`1 X ${prices}`));
    text.append(name, pricea);
    node.append(imgs, text);
    productsCart.appendChild(node);
  }
  const taskPercentage = 5;
  const taskAmount = (subtotal * taskPercentage) / 100;
  const total = subtotal + taskAmount;
  
  subtotalTot.textContent = `Total Price: ${total.toFixed(2)}`;
}

for (let i = 0; i < allBtns.length; i++) {
  let initialCount = 1;

  allBtns[i].addEventListener("click", function () {
    disableScrolling();
    const itemName = productsName[i].textContent;
    const itemImg = img1[i].src;
    const itemPrice = price[i].textContent;
    const existingItem = cartItems.find(item => item.name === itemName);

    if (existingItem) {
      alertBtn.style.display = "block";
      alertBtn.style.animationName = "up-down";
      overLayer.style.display = "block";
      existingItem.count += 1;

      const itemElement = document.querySelector(`.item[data-name="${itemName}"]`);
      const pricea = itemElement.querySelector('p');
      const countElement = pricea.querySelector('.count');
      countElement.textContent = existingItem.count;
      updatePricea(pricea, existingItem.count, itemPrice);

    } else {
      addItemToCart(itemName, itemImg, itemPrice);
      alertBtn.style.display = "block";
      alertBtn.style.animationName = "up-down";
      overLayer.style.display = "block";

      let node = document.createElement(`div`);
      let text = document.createElement("div");
      let name = document.createElement("a");
      let pricea = document.createElement("p");
      let imgs = document.createElement("img");
      let item = itemName;
      let prices = itemPrice.split(" ")[0];
      let count = initialCount++;
      node.classList.add("item");
      imgs.classList.add("src");
      imgs.src = itemImg;
      name.appendChild(document.createTextNode(item));
      pricea.innerHTML = `${count} X ${prices}`;
      pricea.classList.add('pricea');
      text.append(name, pricea);
      node.append(imgs, text);
      productsCart.appendChild(node);
    }

    loadCartItems();
    disableScrolling();
  });
}

function updatePricea(pricea, count, itemPrice) {
  const prices = itemPrice.split(" ")[0];
  pricea.innerHTML = `${count} X ${prices}`;
}

myCart.addEventListener("click", function () {
  navCart.style.display = "flex";
  navCart.style.animationName = "left-to-right";
  overLayer.style.display = "block";
  disableScrolling();
});

closeAlert.addEventListener("click", function () {
  alertBtn.style.animationName = "down-up";
  overLayer.style.display = "none";
  enableScrolling();
});

alertContinue.addEventListener("click", function () {
  alertBtn.style.animationName = "down-up";
  overLayer.style.display = "none";
  enableScrolling();
});

overLayer.addEventListener("click", function () {
  alertBtn.style.animationName = "down-up";
  overLayer.style.display = "none";
  navCart.style.animationName = "right-to-left";
  overLayer.style.display = "none";
  enableScrolling();
});

closeNavCart.addEventListener("click", function () {
  navCart.style.animationName = "right-to-left";
  overLayer.style.display = "none";
  enableScrolling();
});

setInterval(function () {
  const computedStyle = window.getComputedStyle(alertBtn);
  if (computedStyle.animationName === "down-up") {
    alertBtn.style.display = "none";
  }
  const computedStyleCart = window.getComputedStyle(navCart);
  if (computedStyleCart.animationName === "right-to-left") {
    navCart.style.display = "none";
  }
}, 1000);

loadCartItems();

