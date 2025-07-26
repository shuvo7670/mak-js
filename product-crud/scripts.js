let products = JSON.parse(localStorage.getItem("products")) || [];

const form       = document.getElementById("product-form");
const nameInput  = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");
const productId  = document.getElementById("product-id");
const tbody      = document.querySelector("#product-table tbody");

console.log(products);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name  = nameInput.value;
    const price = priceInput.value;

    const id = productId.value;
    if (id) {
        // Edit mode
        const index = products.findIndex((p) => p.id == id);
        products[index].name = name;
        products[index].price = price;
    } else {
        // Create new product
        products.push({
            id: Date.now(),
            name,
            price
        });
    }
    localStorage.setItem("products", JSON.stringify(products));
    renderTable();
    form.reset();
});

function deleteProduct(id) {
      if (!confirm("Are you sure you want to delete this product?")) return;
    products = products.filter((p) => {
        if( p.id == id ){
            return false;
        }
        return true;
    });
    localStorage.setItem("products", JSON.stringify(products));
    renderTable();
}

function editProduct(id) {
  const product = products.find((p) => p.id == id);
  nameInput.value = product.name;
  priceInput.value = product.price;
  productId.value = product.id;
}


function renderTable() {
  tbody.innerHTML = "";
  products.forEach((product, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>$${product.price}</td>
      <td>
        <button onclick="editProduct(${product.id})">Edit</button>
        <button onclick="deleteProduct(${product.id})">Delete</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

renderTable();