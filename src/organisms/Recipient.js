import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TapCard from './TapCard';
import contacts from '../assets/contacts';

const useStyles = makeStyles({
	grid: {
		marginBottom: "2rem"
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
			{!recipient && <h2>Who do you want to talk to?</h2>}
			<Grid container spacing={2} className={classes.grid}>
				{contacts.map(contact => (
					<Grid
						item
						xs={3}
						key={contact.name}
						className={recipient !== null && recipient !== contact.name && classes.hide}
					>
						<TapCard
							message={contact.name}
							avatar={contact.avatar}
							active={contact.name === recipient}
							action={() => action(contact.name)}
						/>
					</Grid>
				))}
			</Grid>
		</Fragment>
	);
}

export default Recipient;
