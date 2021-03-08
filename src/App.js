import React, { useEffect, useState } from 'react';
import { commerce } from './lib/Commerce';
import { Products, NavBar } from './components';
function App() {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	console.log(products);

	return (
		<div>
			<h1>List Products</h1>
			<NavBar />
			<Products products={products} />
		</div>
	);
}

export default App;
