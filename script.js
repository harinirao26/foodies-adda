const menuItems = [
  {
    name: "Cheesy Pizza",
    price: 250,
    image: "https://source.unsplash.com/250x150/?cheese,pizza"
  },
  {
    name: "Spicy Burger",
    price: 180,
    image: "https://source.unsplash.com/250x150/?burger"
  },
  {
    name: "Pasta Alfredo",
    price: 220,
    image: "https://source.unsplash.com/250x150/?pasta"
  },
  {
    name: "Crispy Fries",
    price: 100,
    image: "https://source.unsplash.com/250x150/?fries"
  },
  {
    name: "Cold Coffee",
    price: 120,
    image: "https://source.unsplash.com/250x150/?cold,coffee"
  },
  {
    name: "Steamed Momos",
    price: 90,
    image: "https://source.unsplash.com/250x150/?momos"
  }
];

let cart = {};

function renderMenu() {
  const menuContainer = document.getElementById("menu-items");
  menuItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    menuContainer.appendChild(card);
  });
}

function addToCart(index) {
  const item = menuItems[index];
  const key = item.name;

  if (!cart[key]) {
    cart[key] = { ...item, quantity: 1 };
  } else {
    cart[key].quantity += 1;
  }

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");
  cartList.innerHTML = "";
  let total = 0;

  for (let key in cart) {
    const item = cart[key];
    const li = document.createElement("li");
    li.textContent = `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  }

  totalDisplay.textContent = `Total: ₹${total}`;
}

function placeOrder() {
  if (Object.keys(cart).length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed successfully! 🎉");
  cart = {};
  updateCart();
}

function scrollToMenu() {
  const menuSection = document.getElementById("menu");
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: "smooth" });
  }
}

renderMenu();
