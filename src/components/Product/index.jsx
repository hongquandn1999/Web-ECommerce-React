import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';


function Product(props) {
	const { product } = props;
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root}>
				<CardMedia
					className={classes.media}
					title={product.name}
					image={product.media.source}></CardMedia>
				<CardContent>
					<div className={classes.cardContent}>
						<Typography variant='h5' gutterBottom>
							{product.name}
						</Typography>
						<Typography variant='h5'>
							
							{product.price.formatted_with_symbol}
						
						</Typography>
					</div>
					<Typography dangerouslySetInnerHTML={{__html: product.description}} variant='h5' color='textSecondary'/>
						
				</CardContent>
				<CardActions disableSpacing className={classes.cardActions}>
					<IconButton aria-label='Add to cart'>
						<AddShoppingCart />
					</IconButton>
				</CardActions>
			</Card>
		</div>
	);
}

export default Product;
