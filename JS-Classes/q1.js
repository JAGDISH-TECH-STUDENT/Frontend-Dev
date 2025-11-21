
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }


  applyDiscount(percent) {
    this.price -= (this.price * percent / 100);
  }


  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
  }
}


const products = [
  new Product(1, "Laptop", 50000, "Electronics"),
  new Product(2, "Shoes", 1200, "Fashion"),
  new Product(3, "Book", 500, "Education")
];


products[0].applyDiscount(10);


const expensiveProducts = products.filter(p => p.price > 1000);

expensiveProducts.forEach(p => console.log(p.getDetails()));
