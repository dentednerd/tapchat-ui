import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ContactCard from './ContactCard';
import contacts from '../assets/contacts';

const useStyles = makeStyles({
	grid: {
		margin: "2rem auto"
	},
	hide: {
		display: "none"
	}
});

const Recipient = (props) => {
	const { action, recipient } = props;
	const classes = useStyles();

	return (
		<Fragment>
			<h1>Welcome to Tapchat!</h1>
			{!recipient && <h2>Who would you like to talk to?</h2>}
			<Grid container spacing={2} className={classes.grid} justify="space-around">
				{contacts.map(contact => (
					<Grid
						item
						xs={6}
						sm={4}
						key={contact.name}
					>
						<ContactCard
							contact={contact}
							action={action}
						/>
					</Grid>
				))}
			</Grid>
		</Fragment>
	);
}

export default Recipient;
