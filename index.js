const showSidebar = document.querySelector('.menu--open');
const hideSidebar = document.querySelector('.menu--close');
const sidebar = document.querySelector('.nav--sidebar');
const docBody = document.querySelector('.container');
const docBod = document.querySelector('body');
const navRight = document.querySelector('.nav--item--right');
const footer = document.querySelector('.attribution');
const cartItems = document.querySelector('.cart--items');
const itemCart = document.querySelector('.item--cart');
const itemQuantity = document.getElementById('quantity');
const qtyIncrement = document.getElementById('qty--increment');
const qtyDecrement = document.getElementById('qty--decrement');
const discountedPrice = document.getElementById('discounted--price');
const initialPrice = document.getElementById('initial--price');
const cartSelectionQty = document.querySelector('.cart--selection--qty');
const cartSelectionTotal = document.querySelector('.cart--selection--total');
const basketFilled = document.querySelector('.basket--filled');
const basketEmpty = document.querySelector('.basket--empty');
const addCartBtn = document.getElementById('add-cart');
const promoPrice = 125;
const mainPrice = 250;
const cartQty = document.querySelector('.cart--qty');
const delIcon = document.querySelector('.delete-icon');

showSidebar.addEventListener('click', () => {
  sidebar.style.display = 'flex';
  docBody.classList.add('blurred');
  navRight.classList.add('blurred');
  footer.classList.add('blurred');
})

hideSidebar.addEventListener('click', () => {
  sidebar.style.display = 'none';
  docBody.classList.remove('blurred');
  navRight.classList.remove('blurred');
  footer.classList.remove('blurred');
})

itemCart.addEventListener('click', () => {
  if(cartItems.style.display !== 'flex') {
    cartItems.style.display = 'flex';
  } else {
    cartItems.style.display = 'none';
  }
});

qtyDecrement.addEventListener('click', () => {
  if(itemQuantity.textContent > 0){
    itemQuantity.textContent--
    let totalAmount = Number(itemQuantity.textContent) * promoPrice;
    discountedPrice.textContent = `$${totalAmount}.00`
    let prevAmount = Number(itemQuantity.textContent) * mainPrice;
    initialPrice.textContent = `$${prevAmount}.00`
  }
});

qtyIncrement.addEventListener('click', () => {
  itemQuantity.textContent++;
  let totalAmount = Number(itemQuantity.textContent) * promoPrice;
  discountedPrice.textContent = `$${totalAmount}.00`;
  let prevAmount = Number(itemQuantity.textContent) * mainPrice;
    initialPrice.textContent = `$${prevAmount}.00`
});

addCartBtn.addEventListener('click', () => {
  let totalAmount = Number(itemQuantity.textContent) * promoPrice;
  basketFilled.style.display = 'flex';
  basketEmpty.style.display = 'none';
  cartSelectionQty.textContent = itemQuantity.textContent;
  cartSelectionTotal.textContent =  `$${totalAmount}.00`;
  cartQty.textContent = itemQuantity.textContent;
  cartQty.style.display = 'flex';
})

delIcon.addEventListener('click', () => {
  console.log('Cart about to be deleted!!')
  basketFilled.style.display = 'none';
  basketEmpty.style.display = 'flex';
  cartQty.style.display = 'none';
})

//CAROUSEL
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
} 

//LIGHTBOX
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

showSlides2(slideIndex);

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}