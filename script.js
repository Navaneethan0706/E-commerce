let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');

    if (input.value.trim() === '') return;

    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${input.value}`;
    messages.appendChild(userMessage);

    // Simulating a response from the chatbot
    const botMessage = document.createElement('div');
    botMessage.textContent = `Bot: I'm here to help you with your shopping!`;
    messages.appendChild(botMessage);

    input.value = '';
    messages.scrollTop = messages.scrollHeight; // Scroll to bottom
}
