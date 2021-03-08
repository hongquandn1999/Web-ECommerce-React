import React, { useEffect, useState } from 'react';
import { commerce } from './lib/Commerce';
import { Products, NavBar } from './components';
function App() {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
	};

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};

	const handleAddToCart = async (productId, quantity) => {
		const response = await commerce.cart.add(productId, quantity);

		setCart(response.cart);
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);

	console.log(products);
	console.log(cart);

	return (
		<div>
			<h1>List Products</h1>
			<NavBar totalItem={cart.total_items} />
			<Products products={products} onAddToCart={handleAddToCart} />
		</div>
	);
}

export default App;
