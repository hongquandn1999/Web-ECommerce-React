import { Grid } from '@material-ui/core';
import React from 'react';
import Product from '../Product';



const Products = (props) => {
	const { products } = props;
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
