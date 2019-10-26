import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TapCard from './TapCard';
import contacts from '../assets/contacts';

const useStyles = makeStyles({
	grid: {
		margin: "0 auto 2rem"
	},
  card: {
		height: '8rem',
		padding: '1rem',
		textAlign: 'center',
		backgroundColor: 'white'
	}
});

const Recipient = (props) => {
	const { action, recipient } = props;
	const classes = useStyles();

	return (
		<Grid container spacing={2} className={classes.grid}>
			{contacts.map(contact => (
				<Grid item xs={3} key={contact.name}>
					<TapCard
						message={contact.name}
						active={contact.name === recipient}
						action={() => action(contact.name)}
					/>
				</Grid>
			))}
		</Grid>
	);
}

export default Recipient;
