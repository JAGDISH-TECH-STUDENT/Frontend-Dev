const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

// Calculate discounted total
let total = cart.reduce((sum, product) => {
  let discount = 0;

  if (product.category === "electronics") {
    discount = 0.10;
  } else if (product.category === "fashion") {
    discount = 0.05;
  }

  let discountedPrice = product.price - (product.price * discount);
  return sum + discountedPrice;
}, 0);

// Apply extra discount if total > 50000
if (total > 50000) {
  total -= total * 0.05;
}

console.log(`Final Cart Total: ${total}`);
