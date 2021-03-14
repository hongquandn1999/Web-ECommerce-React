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
import { Link, useLocation } from 'react-router-dom';
function NavBar({ totalItem }) {
	const classes = useStyles();
	const location = useLocation();

	
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
					{
						location.pathname === '/' && (	
							<div className>
								<IconButton
									component={Link}
									to='cart'
									aria-label='Show cart items'
									color='inherit'>
									<Badge badgeContent={totalItem} color='secondary'>
										<ShoppingCart />
									</Badge>
								</IconButton>
							</div>
						)
					}
				</Toolbar>
			</AppBar>
		</>
	);
}

export default NavBar;
