document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("productModal");
    const addBtn = document.querySelector(".add-btn");
    const closeBtn = document.getElementById("closeModal");
    const saveBtn = document.getElementById("saveProduct");
    const table = document.getElementById("productsTable");
    const search = document.getElementById("search");

    let products = JSON.parse(localStorage.getItem("products")) || [];

    function saveProducts() {
        localStorage.setItem("products", JSON.stringify(products));
    }

    function renderProducts() {

        table.innerHTML = "";

        products.forEach((product, index) => {

            table.innerHTML += `
            <tr>
                <td>${product.barcode}</td>
                <td>${product.name}</td>
                <td>${product.buyPrice}</td>
                <td>${product.sellPrice}</td>
                <td>${product.quantity}</td>
                <td>
                    <button class="edit-btn" onclick="editProduct(${index})">
                        ✏️
                    </button>

                    <button class="delete-btn" onclick="deleteProduct(${index})">
