
        // Simulación de productos en el carrito
        const cartItems = [
            { name: "Producto 1", price: 800000 },
            { name: "Producto 2", price: 1500000 },
            { name: "Producto 3", price: 600000 },
        ];

        // Referencias a los elementos del DOM
        const cartList = document.getElementById('cart-list');
        const totalPriceElement = document.getElementById('total-price');
        const clearCartButton = document.getElementById('clear-cart');

        // Función para actualizar el carrito en la página
        function renderCart() {
            cartList.innerHTML = ''; // Limpia la lista
            let total = 0;

            // Genera los elementos de la lista
            cartItems.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
            ${item.name} - $${item.price.toLocaleString('es-ES')}
            <button onclick="removeItem(${index})">Eliminar</button>
        `;
                cartList.appendChild(li);
                total += item.price;
            });

            // Actualiza el total
            totalPriceElement.textContent = total.toLocaleString('es-ES');
        }

        // Función para eliminar un producto del carrito
        function removeItem(index) {
            cartItems.splice(index, 1); // Elimina el elemento del array
            renderCart(); // Actualiza la lista
        }

        // Vaciar el carrito
        clearCartButton.addEventListener('click', () => {
            cartItems.length = 0; // Vacía el array
            renderCart();
        });

        // Renderiza el carrito al cargar la página
        renderCart();
