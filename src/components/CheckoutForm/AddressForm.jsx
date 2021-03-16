import React, { useState } from 'react';
import {
	InputLabel,
	Select,
	MenuItem,
	Button,
	Grid,
	Typography,
} from '@material-ui/core';
import FormInput from './CustomTextField';
import { useForm, FormProvider } from 'react-hook-form';
import commerce from '../../lib/Commerce'

function AddressForm(props) {
	const methods = useForm();
	const [shippingCountries, setShippingCountries] = useState([]);
	const [shippingCountry, setShippingCountry] = useState('');
	const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
	const [shippingSubdivision, setShippingSubdivision] = useState('');
	const [shippingOptions, setShippingOptions] = useState([]);
	const [shippingOption, setShippingOption] = useState('');

	return (
		<>
			<Typography variant='h6' gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form>
					<Grid container spacing={3}>
						<FormInput required name='firstName' label='First Name' />
						<FormInput required name='lastName' label='Last Name' />
						<FormInput required name='address' label='Address' />
						<FormInput required name='email' label='Email' />
						<FormInput required name='City' label='City' />
						<FormInput required name='zip' label='ZIP / Postal code' />
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputLabel>
							Shipping Country
						</InputLabel>
						<Select value={} fullWidth onChange={}>
							<MenuItem key={} value={}>
								Select me
							</MenuItem>
						</Select>
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputLabel>
							Shipping Subdivision
						</InputLabel>
						<Select value={} fullWidth onChange={}>
							<MenuItem key={} value={}>
								Select me
							</MenuItem>
						</Select>
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputLabel>
							Shipping Option
						</InputLabel>
						<Select value={} fullWidth onChange={}>
							<MenuItem key={} value={}>
								Select me
							</MenuItem>
						</Select>
					</Grid>
				</form>
			</FormProvider>
		</>
	);
}

export default AddressForm;
