const cart = {
  items: [],
  addItem(name, price) {
    this.items.push({ name, price });
    this.updateCart();
  },
  removeItem(index) {
    this.items.splice(index, 1);
    this.updateCart();
  },
  updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartHeader = document.querySelector('.cart h2');
    const totalContainer = document.querySelector('.total');

    cartItemsContainer.innerHTML = '';
    this.items.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="cart.removeItem(${index})">Remove</button>`;
      cartItemsContainer.appendChild(li);
    });

    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    cartHeader.textContent = `Your Cart (${this.items.length})`;
    totalContainer.textContent = `Order Total: $${total.toFixed(2)}`;
  },
};

document.querySelectorAll('.card button').forEach((button) => {
  button.addEventListener('click', () => {
    let{name, price} = button.dataset;
    price = parseFloat(price);
    cart.addItem(name, price);
  });
});
