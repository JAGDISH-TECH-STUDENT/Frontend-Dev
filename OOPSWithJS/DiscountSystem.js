function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    return this.price - (this.price * percent / 100);
};

const p1 = new Product("Laptop", 50000);
const p2 = new Product("Mobile", 20000);
const p3 = new Product("Headphones", 2000);

console.log(`${p1.name} after 10% discount: ₹${p1.applyDiscount(10)}`);
console.log(`${p2.name} after 20% discount: ₹${p2.applyDiscount(20)}`);
console.log(`${p3.name} after 50% discount: ₹${p3.applyDiscount(50)}`);
