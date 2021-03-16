import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from '../styles';

const steps = ['Shipping address', 'Payment details'];

function Checkout(props) {
	const [activeStep, setActiveStep] = useState(0);
	const classes = useStyles();

	const Confirmation = () => (
		<div>
			<p>Confirm Kanao</p>
		</div>
	);

	const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

	return (
		<>
			<div className={classes.toolbar}></div>
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant='h4' align='center'>
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map((step) => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? <Confirmation /> : <Form />}
				</Paper>
			</main>
		</>
	);
}

export default Checkout;
