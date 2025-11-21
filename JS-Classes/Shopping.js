class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  applyCoupon(code) {
    const couponRegex = /^(SAVE|DISC)(\d{1,2})$/;
    const match = code.match(couponRegex);
    if (match) {
      const discount = parseInt(match[2]);
      const total = this.getTotal();
      const finalTotal = total - (total * discount / 100);
      console.log(`Coupon applied: ${discount}% off`);
      return finalTotal;
    } else {
      console.log("Invalid coupon");
      return this.getTotal();
    }
  }
}


const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Shoes", 2000, 2);

console.log("Total:", cart.getTotal());
