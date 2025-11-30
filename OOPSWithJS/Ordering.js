const menu = {
    "Pizza": 200,
    "Burger": 100,
    "Pasta": 150
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error(`Invalid item ordered: ${item}`);
            return menu[item];
        });
        const total = prices.reduce((acc, val) => acc + val, 0);
        return `Total Bill: ₹${total}`;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

console.log(calculateBill(["Pizza", "Burger"]));
console.log(calculateBill(["Pizza", "IceCream"]));
