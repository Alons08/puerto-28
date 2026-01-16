// Array completo de productos
const products = [
    // Arroces
    {id: 2, name: "Arroz con langostinos personal", category: "arroces", price: 30, description: "Porción personal de arroz con langostinos.", image: "./images/menu/arroz-langostinos.jpg", available: true},
    {id: 1, name: "Arroz con langostinos fuente", category: "arroces", price: 65, description: "Arroz con langostinos frescos y especias.", image: "./images/menu/arroz-langostinos.jpg", available: true},
    {id: 3, name: "Arroz con choros personal", category: "arroces", price: 30, description: "Arroz con choros y toque de la casa.", image: "./images/menu/arroz-choros.jpg", available: true},
    {id: 4, name: "Arroz con choros fuente", category: "arroces", price: 65, description: "Fuente de arroz con choros frescos.", image: "./images/menu/arroz-choros.jpg", available: true},
    {id: 6, name: "Arroz con marisco personal", category: "arroces", price: 28, description: "Porción personal de arroz con mariscos.", image: "./images/menu/arroz-mariscos.jpg", available: true},
    {id: 5, name: "Arroz con marisco fuente", category: "arroces", price: 60, description: "Arroz con mariscos variados y especias.", image: "./images/menu/arroz-mariscos.jpg", available: true},
    {id: 8, name: "Chaufa de pescado personal", category: "arroces", price: 30, description: "Porción personal de chaufa de pescado.", image: "./images/menu/chaufa-pescado.jpg", available: true},
    {id: 7, name: "Chaufa de pescado fuente", category: "arroces", price: 65, description: "Chaufa de pescado al estilo oriental.", image: "./images/menu/chaufa-pescado.jpg", available: true},
    {id: 10, name: "Chaufa de mariscos personal", category: "arroces", price: 30, description: "Porción personal de chaufa de mariscos.", image: "./images/menu/chaufa-mariscos.jpg", available: true},
    {id: 9, name: "Chaufa de mariscos fuente", category: "arroces", price: 65, description: "Chaufa de mariscos con verduras.", image: "./images/menu/chaufa-mariscos.jpg", available: true},

    // Bebidas
    {id: 11, name: "Agua", category: "bebidas", price: 3, description: "Agua embotellada fría.", image: "./images/menu/agua.jpg", available: true},
    {id: 12, name: "Taypa", category: "bebidas", price: 4, description: "Bebida refrescante tradicional.", image: "./images/menu/taypa.jpg", available: true},
    {id: 13, name: "Cerveza Trigo", category: "bebidas", price: 10, description: "Cerveza de trigo bien fría.", image: "./images/menu/cerveza-cusquena-trigo.jpg", available: true},
    {id: 14, name: "Cerveza Negra", category: "bebidas", price: 10, description: "Cerveza negra nacional.", image: "./images/menu/cerveza-cusquena-negra.jpg", available: true},
    {id: 15, name: "Cerveza Trujillo", category: "bebidas", price: 9, description: "Cerveza Trujillo tradicional.", image: "./images/menu/cerveza-trujillo.jpg", available: true},
    {id: 16, name: "Chicha morada 500ml", category: "bebidas", price: 5, description: "Chicha morada natural 500ml.", image: "./images/menu/chicha-morada.jpg", available: true},
    {id: 17, name: "Chicha morada 1L", category: "bebidas", price: 10, description: "Chicha morada natural 1L.", image: "./images/menu/chicha-morada.jpg", available: true},
    {id: 18, name: "Gaseosa Inka cola 1L", category: "bebidas", price: 8, description: "Inka Kola 1L fría.", image: "./images/menu/gaseosa-inca-1lt.jpg", available: true},
    {id: 19, name: "Gaseosa Gordita", category: "bebidas", price: 5, description: "Gaseosa tradicional tamaño gordita.", image: "./images/menu/gaseosa-gordita.jpg", available: true},
    {id: 20, name: "Gaseosa Coca cola 1L", category: "bebidas", price: 8, description: "Coca Cola 1L fría.", image: "./images/menu/gaseosa-coca-1l.jpg", available: true},

    // Ceviches
    {id: 100, name: "Ceviche de pescado natural personal", category: "ceviches", price: 28, description: "Ceviche de pescado fresco.", image: "./images/menu/ceviche-pescado.jpg", available: true},
    {id: 21, name: "Ceviche de pescado natural fuente", category: "ceviches", price: 55, description: "Ceviche de pescado fresco, fuente.", image: "./images/menu/ceviche-pescado.jpg", available: true},
    {id: 22, name: "Ceviche mixto en crema de rocoto personal", category: "ceviches", price: 36, description: "Ceviche mixto con crema de rocoto.", image: "./images/menu/ceviche-mixto-rocoto.jpg", available: true},
    {id: 25, name: "Ceviche mixto en crema de rocoto fuente", category: "ceviches", price: 70, description: "Ceviche mixto con crema de rocoto fuente.", image: "./images/menu/ceviche-mixto-rocoto.jpg", available: true},
    {id: 23, name: "Ceviche mixto natural personal", category: "ceviches", price: 30, description: "Ceviche mixto clásico personal.", image: "./images/menu/ceviche-mixto.jpg", available: true},
    {id: 24, name: "Ceviche mixto natural fuente", category: "ceviches", price: 60, description: "Ceviche mixto clásico fuente.", image: "./images/menu/ceviche-mixto.jpg", available: true},
    {id: 26, name: "Ceviche mixto en leche de tigre personal", category: "ceviches", price: 33, description: "Ceviche mixto en leche de tigre.", image: "./images/menu/ceviche-mixto-tigre.jpg", available: true},
    {id: 27, name: "Ceviche mixto en leche de tigre fuente", category: "ceviches", price: 65, description: "Ceviche mixto en leche de tigre fuente.", image: "./images/menu/ceviche-mixto-tigre.jpg", available: true},
    {id: 32, name: "Ceviche mixto acangrejao personal", category: "ceviches", price: 35, description: "Ceviche mixto con cangrejo personal.", image: "./images/menu/ceviche-mixto-acangrejao.jpg", available: true},
    {id: 28, name: "Ceviche mixto acangrejao fuente", category: "ceviches", price: 70, description: "Ceviche mixto con cangrejo fuente.", image: "./images/menu/ceviche-mixto-acangrejao.jpg", available: true},
    {id: 29, name: "Ceviche mixto tricolor personal", category: "ceviches", price: 55, description: "Ceviche mixto con tres sabores.", image: "./images/menu/ceviche-mixto-tricolor.jpg", available: true},
    {id: 30, name: "Ceviche mixto tricolor fuente", category: "ceviches", price: 90, description: "Ceviche mixto tricolor fuente.", image: "./images/menu/ceviche-mixto-tricolor.jpg", available: true},
    {id: 31, name: "Ceviche de cangrejos personal", category: "ceviches", price: 40, description: "Ceviche con cangrejo personal.", image: "./images/menu/ceviche-mixto-cangrejos.jpg", available: true},
    {id: 35, name: "Ceviche de cangrejos fuente", category: "ceviches", price: 80, description: "Ceviche con cangrejo fuente.", image: "./images/menu/ceviche-mixto-cangrejos.jpg", available: true},
    {id: 33, name: "Causa acevichada", category: "ceviches", price: 28, description: "Causa rellena con ceviche.", image: "./images/menu/causa-acevichada.jpg", available: true},
    {id: 40, name: "Ceviche de pescado ahuancainado personal", category: "ceviches", price: 32, description: "Ceviche de pescado con salsa huancaína.", image: "./images/menu/ceviche-pescado-huancainado.jpg", available: true},
    {id: 34, name: "Ceviche de pescado ahuancainado fuente", category: "ceviches", price: 65, description: "Ceviche de pescado con salsa huancaína.", image: "./images/menu/ceviche-pescado-huancainado.jpg", available: true},
    {id: 36, name: "Ceviche mixto ahuancainado personal", category: "ceviches", price: 36, description: "Ceviche mixto con salsa huancaína.", image: "./images/menu/ceviche-mixto-huancainado.jpg", available: true},
    {id: 37, name: "Ceviche mixto ahuancainado fuente", category: "ceviches", price: 70, description: "Ceviche mixto con salsa huancaína fuente.", image: "./images/menu/ceviche-mixto-huancainado.jpg", available: true},
    {id: 38, name: "Ceviche de pescado en crema de rocoto personal", category: "ceviches", price: 32, description: "Ceviche de pescado con crema de rocoto.", image: "./images/menu/ceviche-pescado-rocoto.jpg", available: true},
    {id: 39, name: "Ceviche de pescado en crema de rocoto fuente", category: "ceviches", price: 65, description: "Ceviche de pescado con crema de rocoto fuente.", image: "./images/menu/ceviche-pescado-rocoto.jpg", available: true},
    {id: 41, name: "Ceviche de pescado en leche de tigre personal", category: "ceviches", price: 30, description: "Ceviche de pescado en leche de tigre.", image: "./images/menu/ceviche-pescado-lechetigre.jpg", available: true},
    {id: 42, name: "Ceviche de pescado en leche de tigre fuente", category: "ceviches", price: 60, description: "Ceviche de pescado en leche de tigre fuente.", image: "./images/menu/ceviche-pescado-lechetigre.jpg", available: true},
    {id: 43, name: "Cevimaruchas a huancainadas", category: "ceviches", price: 30, description: "Cevimaruchas con salsa huancaína.", image: "./images/menu/cevimaruchas-huancaina.jpg", available: true},
    {id: 44, name: "Cevimaruchas en leche tigre", category: "ceviches", price: 28, description: "Cevimaruchas en leche de tigre.", image: "./images/menu/cevimaruchas-lechetigre.jpg", available: true},
    {id: 45, name: "Cevimaruchas en crema rocoto", category: "ceviches", price: 30, description: "Cevimaruchas con crema de rocoto.", image: "./images/menu/cevimaruchas-rocoto.jpg", available: true},

    // Chicharrones
    {id: 47, name: "Chicharrón de langostinos personal", category: "chicharrones", price: 40, description: "Porción personal de langostinos fritos.", image: "./images/menu/chicharron-langostinos.jpg", available: true},
    {id: 46, name: "Chicharrón de langostinos fuente", category: "chicharrones", price: 75, description: "Langostinos fritos y crocantes.", image: "./images/menu/chicharron-langostinos.jpg", available: true},
    {id: 49, name: "Chicharrón de pescado personal", category: "chicharrones", price: 28, description: "Porción personal de chicharrón de pescado.", image: "./images/menu/chicharron-pescado.jpg", available: true},
    {id: 48, name: "Chicharrón de pescado fuente", category: "chicharrones", price: 60, description: "Chicharrón de pescado fuente.", image: "./images/menu/chicharron-pescado.jpg", available: true},
    {id: 51, name: "Chicharrón mixto personal", category: "chicharrones", price: 35, description: "Porción personal de chicharrón mixto.", image: "./images/menu/chicharron-mixto.jpg", available: true},
    {id: 50, name: "Chicharrón mixto fuente", category: "chicharrones", price: 60, description: "Chicharrón mixto de mariscos fuente.", image: "./images/menu/chicharron-mixto.jpg", available: true},
    {id: 52, name: "Chicharrón de pollo", category: "chicharrones", price: 20, description: "Chicharrón de pollo crocante.", image: "./images/menu/chicharron-pollo.jpg", available: true},

    // Comida Criolla
    {id: 53, name: "Lomo saltado", category: "criolla", price: 25, description: "Lomo saltado clásico con papas.", image: "./images/menu/lomo-saltado.jpg", available: true},
    {id: 54, name: "Guisada", category: "criolla", price: 20, description: "Guiso criollo tradicional.", image: "./images/menu/guisada.jpg", available: true},
    {id: 55, name: "Combinado simple", category: "criolla", price: 10, description: "Combinado de arroz y guiso.", image: "./images/menu/combinado-simple.jpg", available: true},
    {id: 56, name: "Combinado con patita de fiambre", category: "criolla", price: 15, description: "Combinado con patita de cerdo.", image: "./images/menu/combinado-patita.jpg", available: true},

    // Duos y Trios
    {id: 57, name: "Duo marino", category: "duos-trios", price: 45, description: "Dúo de platos marinos favoritos.", image: "./images/menu/duo-marino.jpg", available: true},
    {id: 58, name: "Trio marino", category: "duos-trios", price: 60, description: "Trío de especialidades marinas.", image: "./images/menu/trio-marino.jpg", available: true},

    // Para Picar
    {id: 59, name: "Choritos a la chalaca", category: "parapicar", price: 25, description: "Mejillones con salsa criolla.", image: "./images/menu/choros-chalaca.jpg", available: true},
    {id: 60, name: "Patita acevichada", category: "parapicar", price: 25, description: "Patita de cerdo en salsa acevichada.", image: "./images/menu/patita-acevichada.jpg", available: true},
    {id: 61, name: "Patita en fiambre", category: "parapicar", price: 15, description: "Patita de cerdo fría y sabrosa.", image: "./images/menu/patita-friamente.jpg", available: true},

    // Sopas y Jugosos
    {id: 62, name: "Parihuela personal", category: "sopas-jugosos", price: 40, description: "Sopa marina con mariscos.", image: "./images/menu/parihuela.jpg", available: true},
    {id: 63, name: "Parihuela fuente", category: "sopas-jugosos", price: 75, description: "Fuente de parihuela con mariscos.", image: "./images/menu/parihuela.jpg", available: true},
    {id: 64, name: "Sudado personal", category: "sopas-jugosos", price: 30, description: "Sudado de pescado personal.", image: "./images/menu/sudado.jpg", available: true},
    {id: 65, name: "Sudado fuente", category: "sopas-jugosos", price: 55, description: "Fuente de sudado de pescado.", image: "./images/menu/sudado.jpg", available: true},

    // Otros (mariscos, especiales, etc.)
    {id: 66, name: "Espaguetis en salsa de marisco", category: "parapicar", price: 35, description: "Espaguetis con salsa de mariscos.", image: "./images/menu/espaguetis.jpg", available: true},
    {id: 67, name: "Reventado de cangrejos", category: "parapicar", price: 35, description: "Cangrejos reventados al estilo de la casa.", image: "./images/menu/reventado.jpg", available: true},
    {id: 68, name: "Picante de mariscos", category: "arroces", price: 35, description: "Picante de mariscos con arroz.", image: "./images/menu/picante-mariscos.jpg", available: true},
    {id: 69, name: "Guarnición", category: "parapicar", price: 8, description: "Guarnición para acompañar tus platos.", image: "./images/menu/guarnicion.jpg", available: true},
    {id: 70, name: "Jalea mixta fuente", category: "parapicar", price: 80, description: "Jalea mixta de mariscos fuente.", image: "./images/menu/jalea-mixta.jpg", available: true},
    {id: 71, name: "Jalea mixta personal", category: "parapicar", price: 45, description: "Porción personal de jalea mixta.", image: "./images/menu/jalea-mixta.jpg", available: true},
    {id: 72, name: "Pescado al ajo personal", category: "parapicar", price: 40, description: "Pescado al ajo porción personal.", image: "./images/menu/pescado-ajo.jpg", available: true},
    {id: 73, name: "Pescado a lo macho personal", category: "parapicar", price: 40, description: "Pescado a lo macho personal.", image: "./images/menu/pescado-macho.jpg", available: true},
    {id: 74, name: "Brujería marina", category: "parapicar", price: 35, description: "Especialidad marina de la casa.", image: "./images/menu/brujeria-marina.jpg", available: true},
    {id: 75, name: "Tacu tacu en salsa de marino", category: "arroces", price: 35, description: "Tacu tacu con salsa de mariscos.", image: "./images/menu/tacutacu-marino.jpg", available: true},
    {id: 76, name: "Chilcano", category: "sopas-jugosos", price: 15, description: "Chilcano de pescado tradicional.", image: "./images/menu/chilcano-pescado.jpg", available: true}
];

// Hacer el array accesible globalmente
window.restaurantProducts = products;

function renderProducts(category = 'ceviches') {
    const menuItemsContainer = document.getElementById('menu-items');
    if (!menuItemsContainer) return;

    menuItemsContainer.innerHTML = '';

    const filteredProducts = products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        menuItemsContainer.innerHTML = `
            <div class="no-products">
                <i class="fas fa-utensils"></i>
                <p>No hay productos disponibles en esta categoría</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'menu-item';
        productElement.innerHTML = `
            <div class="item-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${!product.available ? '<span class="sold-out">Agotado</span>' : ''}
            </div>
            <div class="item-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <span class="price">S/ ${product.price.toFixed(2)}</span>
                ${product.available ? `
                <div class="item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        Añadir al carrito
                    </button>
                </div>
                ` : ''}
            </div>
        `;
        menuItemsContainer.appendChild(productElement);
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.category);
        });
    });
}

function setupProductEvents() {
    // Evento delegado para controles de cantidad
    document.addEventListener('click', function(e) {
        // Control de cantidad
        const quantityBtn = e.target.closest('.quantity-btn');
        if (quantityBtn) {
            const input = quantityBtn.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            
            if (quantityBtn.classList.contains('minus') && value > 1) {
                input.value = value - 1;
            } else if (quantityBtn.classList.contains('plus')) {
                input.value = value + 1;
            }
            return; // Salir para no procesar el clic como add-to-cart
        }
        
        // Evento para añadir al carrito
        const addToCartBtn = e.target.closest('.add-to-cart');
        if (addToCartBtn) {
            const productId = parseInt(addToCartBtn.dataset.id);
            const product = window.restaurantProducts.find(p => p.id === productId);
            
            if (product) {
                const quantityInput = addToCartBtn.closest('.item-actions').querySelector('.quantity-input');
                const quantity = parseInt(quantityInput.value) || 1;
                
                // Disparar evento personalizado con la cantidad correcta
                const event = new CustomEvent('productAddedToCart', {
                    detail: { product, quantity }
                });
                document.dispatchEvent(event);
                
                // Mostrar feedback visual
                const notification = document.createElement('div');
                notification.className = 'add-to-cart-feedback';
                notification.textContent = `+${quantity}`;
                addToCartBtn.appendChild(notification);
                
                setTimeout(() => {
                    notification.remove();
                }, 1000);
            }
        }
    });
}

function initProducts() {
    renderProducts('ceviches');
    setupFilters();
    setupProductEvents();
}

document.addEventListener('DOMContentLoaded', initProducts);