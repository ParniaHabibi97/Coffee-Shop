function updateCoffeePicture() {
    const ingredient = document.getElementById('ingredient-select').value;
    const coffeeImage = document.getElementById('coffee-image');
    if (ingredient === 'Latte') {
        coffeeImage.src = 'images/Latte-coffee.jpg';
    } else if (ingredient === 'Americano') {
        coffeeImage.src = 'images/Americano.jpg';
    } else if (ingredient === 'Mocha') {
        coffeeImage.src = 'images/Mocha-coffee.jpg';
    } else if (ingredient === 'Affogato') {
        coffeeImage.src = 'images/Affogato-coffee.jpg';
    } else {
        coffeeImage.src = 'images/Coffee.jpg';
    }
}

function placeOrder() {
    document.getElementById('order-message').style.display = 'block';
}