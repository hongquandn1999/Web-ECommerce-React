import { Grid } from '@material-ui/core';
import React from 'react';
import Product from '../Product';
import shortid from 'shortid';
const products = [
	{
		id: shortid.generate(),
		name: 'Shinobu Kocho',
		price: 3000,
		url:
			'https://i.pinimg.com/564x/71/33/30/713330e23bbcd77a7d19c20a72776180.jpg',
	},
	{
		id: shortid.generate(),
		name: 'Mimosa',
		price: 3000,
		url:
			'https://i.pinimg.com/564x/ee/15/14/ee1514f5cac1a396beb177095f828712.jpg',
	},
	{
		id: shortid.generate(),
		name: 'Asuna',
		price: 3000,
		url:
			'https://i.pinimg.com/564x/7e/03/7b/7e037bb81bdfa730bbed1abe9694acaf.jpg',
	},
	{
		id: shortid.generate(),
		name: 'Nezuko',
		price: 3000,
		url:
			'https://i.pinimg.com/564x/81/48/e4/8148e460dad6a4ea09dd149e5127d2ba.jpg',
	},
];

const Products = (props) => {
	return (
		<main>
			<Grid container spacing={4} justify='center'>
				{products.map((item) => (
					<Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={item} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

Products.propTypes = {};

export default Products;
