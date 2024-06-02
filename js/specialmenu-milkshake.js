function updateCoffeePicture() {
    const ingredient = document.getElementById('ingredient-select').value;
    const coffeeImage = document.getElementById('coffee-image');
    if (ingredient === 'Bannana') {
        coffeeImage.src = 'images/banana-milkshake.jpg';
    } else if (ingredient === 'Chocolate') {
        coffeeImage.src = 'images/chocolate-milkshake.jpg';
    } else if (ingredient === 'Strawberry') {
        coffeeImage.src = 'images/strawberry-milkshake.jpg';
    } else if (ingredient === 'Vanilla') {
        coffeeImage.src = 'images/vanilla-milkshake.jpg';
    } else {
        coffeeImage.src = 'images/milkshake.jpg';
    }
}

function placeOrder() {
    document.getElementById('order-message').style.display = 'block';
}