import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
function Cart(props) {
	const { cart } = props;

	const isEmpty = !cart.line_items.length;
	const classes = useStyles();
	console.log(cart);

	const EmptyCart = () => (
		<Typography variant='subtitle1'>
			You have no item in your shopping cart, start adding some !
		</Typography>
	);

	const FilledCart = () => (
		<>
			<Grid container spacing={3}>
				{cart.line_items.map((item) => (
					<Grid xs={12} sm={4} key={item.id}>
						<CartItem item={item} />
					</Grid>
				))}
			</Grid>
			<div className={classes.cardDetails}>
				<Typography variant='h4'>
					Subtotal: {cart.subtotal.formatted_with_symbol}
				</Typography>
				<div>
					<Button
						className={classes.emptyButton}
						size='large'
						type='button'
						variant='contained'
						color='secondary'>
						Empty Cart
					</Button>
					<Button
						className={classes.checkoutButton}
						size='large'
						type='button'
						variant='contained'
						color='primary'>
						Checkout
					</Button>
				</div>
			</div>
		</>
	);

	return (
		<div>
			<div className={classes.toolbar} />

			<Typography className={classes.title} variant='h3' gutterBottom>
				Your Shopping Cart
			</Typography>
			{isEmpty ? <EmptyCart /> : <FilledCart />}
		</div>
	);
}

export default Cart;
