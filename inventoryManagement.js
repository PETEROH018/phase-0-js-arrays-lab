// Write your code here
// 1. Create the Product Inventory Array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// 2. Access Product Information
function logFirstProduct() {
    console.log(products[0]);
}

// 3. Update Product Information
function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    } else {
        console.log("Invalid index");
    }
}

// 4. Remove a Product
function removeLastProduct() {
    products.pop();
}
// 5. Add a New Product
function addProduct() {
    products.push("Tablet");
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};

