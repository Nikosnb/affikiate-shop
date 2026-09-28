const products = [

{
  id: 1,
  name: "Men Jacket",
  price: 59,
  image: "img/elek.jpg",
  description: "Modern men jacket",
  delivery: "7-15 days"
},

{
  id: 2,
  name: "Women Jeans",
  price: 39,
  image: "img/jenski-danki.jpg",
  description: "Stylish women jeans",
  delivery: "5-12 days"
},

{
  id: 3,
  name: "Sneakers",
  price: 49,
  image: "img/maratonki.jpg",
  description: "Comfortable sneakers",
  delivery: "6-10 days"
},

{
  id: 4,
  name: "Men T-Shirt",
  price: 19,
  image: "img/teniska.jpg",
  description: "Premium cotton t-shirt",
  delivery: "5-9 days"
},

{
  id: 5,
  name: "Women Bag",
  price: 44,
  image: "img/chanta.jpg",
  description: "Elegant women bag",
  delivery: "7-14 days"
},

{
  id: 6,
  name: "Luxury Watch",
  price: 120,
  image: "https://picsum.photos/400?watch",
  description: "Elegant luxury watch",
  delivery: "4-8 days"
},

{
  id: 7,
  name: "Smart Watch Pro",
  price: 89,
  image: "https://picsum.photos/400?smartwatch",
  description: "Modern smart watch",
  delivery: "3-7 days"
},

{
  id: 8,
  name: "Women Ring",
  price: 35,
  image: "https://picsum.photos/400?ring",
  description: "Premium silver ring",
  delivery: "5-10 days"
},

{
  id: 9,
  name: "Skin Care Cream",
  price: 18,
  image: "https://picsum.photos/400?cream",
  description: "Natural skin cream",
  delivery: "4-7 days"
},

{
  id: 10,
  name: "Hair Shampoo",
  price: 14,
  image: "https://picsum.photos/400?shampoo",
  description: "Healthy hair shampoo",
  delivery: "3-6 days"
},

{
  id: 11,
  name: "Kids Jacket",
  price: 40,
  image: "https://picsum.photos/400?kids-fashion",
  description: "Warm kids jacket",
  delivery: "5-12 days"
},

{
  id: 12,
  name: "Gaming Headset",
  price: 65,
  image: "https://picsum.photos/400?headset",
  description: "RGB gaming headset",
  delivery: "4-9 days"
},

{
  id: 13,
  name: "Sneakers X",
  price: 75,
  image: "https://picsum.photos/400?sneakers",
  description: "Streetwear sneakers",
  delivery: "6-11 days"
},

{
  id: 14,
  name: "Premium Hoodie",
  price: 55,
  image: "https://picsum.photos/400?hoodie",
  description: "Oversized premium hoodie",
  delivery: "5-10 days"
},

{
  id: 15,
  name: "Women Handbag",
  price: 95,
  image: "https://picsum.photos/400?bag",
  description: "Luxury women handbag",
  delivery: "5-14 days"
}

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// ADD TO CART
function addToCart(p) {

  cart.push(p);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart 🛒");
}

// FAVORITES
function addToFavorites(p) {

  favorites.push(p);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  alert("Added to favorites ❤️");
}

// OPEN PRODUCT PAGE
function openProduct(p) {

  localStorage.setItem("currentProduct", JSON.stringify(p));

  window.location.href = "product.html";
}

// PRODUCTS CONTAINER
const container = document.getElementById("products");

// SHOW PRODUCTS
products.forEach(p => {

  container.innerHTML += `

    <div class="card">

      <img src="${p.image}">

      <h3>${p.name}</h3>

      <p>$${p.price}</p>

      <button onclick='openProduct(${JSON.stringify(p)})'>
        View 👀
      </button>

      <button onclick='addToCart(${JSON.stringify(p)})'>
        Add to Cart 🛒
      </button>

      <button onclick='addToFavorites(${JSON.stringify(p)})'>
        ❤️ Favorite
      </button>

    </div>

  `;
});


// 🔍 SEARCH PRODUCTS
function searchProducts() {

  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    const title = card
      .querySelector("h3")
      .innerText
      .toLowerCase();

    if (title.includes(input)) {

      card.style.display = "block";

    }

    else {

      card.style.display = "none";

    }

  });
}


// 🚪 LOGOUT
function logout() {

  localStorage.removeItem("loggedIn");

  alert("Logged out 👋");

  window.location.href = "index.html";
}