// Login Functionality
function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === "admin" && pass === "1234") {
        location.href = "dashboard.html";
    } else {
        document.getElementById('error-msg').textContent = "Invalid credentials!";
    }
}

// Add Products
const products = [];
function addProduct() {
    const name = document.getElementById('productName').value;
    const qty = document.getElementById('productQty').value;
    const price = document.getElementById('productPrice').value;
    products.push({ name, qty, price });
    alert("Product Added!");
}