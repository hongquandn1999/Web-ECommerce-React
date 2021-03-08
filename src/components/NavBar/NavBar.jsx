import {
	AppBar,
	Badge,
	IconButton,
	Toolbar,
	Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import logo from '../../assets/img/logo.png';
import useStyles from './styles';
function NavBar(props) {
	const classes = useStyles();
	return (
		<>
			<AppBar position='fixed' color='inherit' className={classes.appBar}>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						<img
							src={logo}
							alt='logo-commerce'
							height='25px'
							className={classes.image}
						/>
						HHQ Commerce
					</Typography>
					<div className={classes.grow}></div>
					<div>
						<IconButton aria-label='Show cart items' color='inherit'>
							<Badge badgeContent={2} color='secondary'>
								<ShoppingCart />
							</Badge>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default NavBar;
