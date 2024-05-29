document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.querySelectorAll('.ingredient');
    const orderName = document.getElementById('order-name');
    const orderPrice = document.getElementById('order-price');
    const productImage = document.getElementById('product-image');
    let selectedIngredients = [];

    ingredients.forEach(ingredient => {
        ingredient.addEventListener('click', () => {
            const ingredientName = ingredient.dataset.name;
            const ingredientPrice = parseFloat(ingredient.dataset.price);

            if (selectedIngredients.some(ing => ing.name === ingredientName)) {
                selectedIngredients = selectedIngredients.filter(ing => ing.name !== ingredientName);
                ingredient.querySelector('.ingredient-img').classList.remove('selected');
            } else {
                selectedIngredients.push({ name: ingredientName, price: ingredientPrice });
                ingredient.querySelector('.ingredient-img').classList.add('selected');
            }

            updateOrder();
        });
    });

    function updateOrder() {
        const ingredientNames = selectedIngredients.map(ing => ing.name);
        const totalPrice = selectedIngredients.reduce((total, ing) => total + ing.price, 0);

        orderName.textContent = `Ingredients: ${ingredientNames.join(', ') || 'None'}`;
        orderPrice.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

        // Update the product image based on the selected ingredients
        updateProductImage(ingredientNames);
    }

    function updateProductImage(ingredientNames) {
        // Example rules for changing the product image
        let imageSrc = 'coffee-placeholder.png';

        if (ingredientNames.includes('Coffee') && ingredientNames.includes('Milk')) {
            imageSrc = 'images/Latte.jpg';
        } else if (ingredientNames.includes('Coffee') && ingredientNames.includes('Foam')) {
            imageSrc = 'images/Cappuccino.jpg';
        } else if (ingredientNames.includes('Coffee') && ingredientNames.includes('Chocolate')) {
            imageSrc = 'images/Mocha.jpg';
        } else if (ingredientNames.includes('Coffee') && ingredientNames.includes('Milk') && ingredientNames.includes('Chocolate')) {
            imageSrc = 'images/Mocha-latte.jpg';
        } else if (ingredientNames.includes('Coffee') && ingredientNames.includes('Cream')) {
            imageSrc = 'images/Irish-coffee.jpg';
        } else if (ingredientNames.length === 1 && ingredientNames.includes('Coffee')) {
            imageSrc = 'images/Black-coffee.jpg';
        }

        productImage.src = imageSrc;
    }
});
