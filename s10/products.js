// Sample product data with images
const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'electronics', image: 'images/laptop.jpg' },
    { id: 2, name: 'Smartphone', price: 499, category: 'electronics', image: 'images/smartphone.jpg' },
    { id: 3, name: 'T-shirt', price: 19, category: 'clothing', image: 'images/tshirt.png' },
    { id: 4, name: 'Blender', price: 89, category: 'home', image: 'images/blender.jpg' },
    { id: 5, name: 'Headphones', price: 199, category: 'electronics', image: 'images/headphones.jpg' },
    { id: 6, name: 'Sofa', price: 499, category: 'home', image: 'images/sofa.jpg' }
];

// Function to display products
function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    productsToDisplay.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p class="price">$${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}

// Function to handle search, filter, and sort
function updateProductList() {
    let filteredProducts = products;
    const searchValue = document.getElementById('search').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const sortOption = document.getElementById('sort').value;

    // Filter by category
    if (categoryFilter) {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }

    // Filter by search term
    filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(searchValue));

    // Sort by price
    if (sortOption === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Display filtered and sorted products
    displayProducts(filteredProducts);
}

// Event listeners for search, filter, and sort controls
document.getElementById('search').addEventListener('input', updateProductList);
document.getElementById('category-filter').addEventListener('change', updateProductList);
document.getElementById('sort').addEventListener('change', updateProductList);

// Initial display of products
displayProducts(products);
