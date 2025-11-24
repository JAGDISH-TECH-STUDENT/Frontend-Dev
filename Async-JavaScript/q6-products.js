async function fetchProducts() {
  try {
    console.log("Loading products...");
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const products = await res.json();

    products.forEach((p) => {
      console.log(`Product: ${p.title}`);
      console.log(`Price: $${p.price}`);
      console.log(`Image: ${p.image}`);
      console.log("----");
    });

    if (typeof document !== "undefined") {
      const container = document.createElement("div");
      container.style.display = "grid";
      container.style.gridTemplateColumns = "repeat(auto-fill, minmax(220px, 1fr))";
      container.style.gap = "12px";
      document.body.appendChild(container);

      products.forEach((p) => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ddd";
        card.style.padding = "12px";
        card.style.borderRadius = "8px";
        card.style.boxShadow = "0 1px 4px rgba(0,0,0,0.1)";

        const img = document.createElement("img");
        img.src = p.image;
        img.alt = p.title;
        img.style.width = "100%";
        img.style.height = "160px";
        img.style.objectFit = "contain";

        const title = document.createElement("h4");
        title.textContent = p.title;

        const price = document.createElement("p");
        price.textContent = `$${p.price}`;

        card.append(img, title, price);
        container.appendChild(card);
      });
    }
  } catch (err) {
    console.error("Failed to load products. Please try again.");
    console.error("Error detail:", err.message);
  }
}

fetchProducts();
