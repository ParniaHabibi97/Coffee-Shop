function updateCoffeePicture() {
    const ingredient = document.getElementById('ingredient-select').value;
    const coffeeImage = document.getElementById('coffee-image');
    if (ingredient === 'lemonade') {
        coffeeImage.src = 'images/lemonade-drink.jpg';
    } else if (ingredient === 'orange') {
        coffeeImage.src = 'images/orange-drink.jpg';
    } else if (ingredient === 'strawberry') {
        coffeeImage.src = 'images/strawberry-drink.jpg';
    } else if (ingredient === 'pineapple') {
        coffeeImage.src = 'images/pineapple-drink.jpg';
    } else {
        coffeeImage.src = 'images/Coffee.jpg';
    }
}

function placeOrder() {
    document.getElementById('order-message').style.display = 'block';
}