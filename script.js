const products = [
    { id: 1, name: 'PVC Pipe (1/2")', price: 150, description: 'High quality PVC pipe' },
    { id: 2, name: 'Brass Tap', price: 250, description: 'Durable brass tap' },
    { id: 3, name: 'Elbow Fitting (1/2")', price: 80, description: 'Elbow connector fitting' },
    { id: 4, name: 'Ball Valve', price: 200, description: 'Reliable ball valve' },
    { id: 5, name: 'Pipe Connector (3/4")', price: 120, description: 'Universal connector' },
    { id: 6, name: 'Water Valve', price: 180, description: 'Main water valve' }
];

let cart = [];

// Display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">₹${product.price}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`\${product.name} added to cart!`);
    }
}

// Contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! We will contact you at ${email} soon.`);
    this.reset();
});

// WhatsApp function
function contactWhatsApp() {
    const phoneNumber = '+916235508514';
    const message = 'Hello NIJU PLUMBINGS, I am interested in your plumbing parts.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Call function
function callUs() {
    window.location.href = 'tel:+916235508514';
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    
    // Add contact buttons to the contact section
    const contactSection = document.getElementById('contact');
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    contactInfo.innerHTML = `
        <h3>Call us or WhatsApp</h3>
        <a href="tel:+916235508514" onclick="callUs()">📞 Call: +916235508514</a>
        <a href="#" onclick="contactWhatsApp()">💬 WhatsApp Chat</a>
    `;
    contactSection.appendChild(contactInfo);
});
