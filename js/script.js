// toogle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// kertika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toogle class active untuk search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// tooge class  active untuk shopping-cart-button
const shoppingCart = document.querySelector(".shopping-cart");
// ketika produk menu diklik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
// Buka modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Tutup modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Sliders Otomoatis
let currentSlide = 1;
const totalSlides = 4;
const intervalTime = 7000;

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".nav-dot");

// Update active navigation dots
function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide - 1].classList.add("active");
}

// Change slide function
function showSlide(slideIndex) {
  if (slideIndex < 1) {
    currentSlide = totalSlides;
  } else if (slideIndex > totalSlides) {
    currentSlide = 1;
  } else {
    currentSlide = slideIndex;
  }

  slides.style.transform = `translateX(-${(currentSlide - 1) * 100}%)`;
  updateDots();
}

// Add event listeners for next and previous buttons
document.getElementById("next-slide").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

document.getElementById("prev-slide").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

// Add event listeners for navigation dots
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const slideNumber = parseInt(e.target.getAttribute("data-slide"));
    showSlide(slideNumber);
  });
});

// Auto slide
setInterval(() => {
  showSlide(currentSlide + 1);
}, intervalTime);

// PriceList
var $cont = document.querySelector(".cont");
var $elsArr = [].slice.call(document.querySelectorAll(".el"));
var $closeBtnsArr = [].slice.call(document.querySelectorAll(".el__close-btn"));

setTimeout(function () {
  $cont.classList.remove("s--inactive");
}, 200);

$elsArr.forEach(function ($el) {
  $el.addEventListener("click", function () {
    if (this.classList.contains("s--active")) return;
    $cont.classList.add("s--el-active");
    this.classList.add("s--active");
  });
});

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $cont.classList.remove("s--el-active");
    document.querySelector(".el.s--active").classList.remove("s--active");
  });
});
