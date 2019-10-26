import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TapCard from './TapCard';

const useStyles = makeStyles({
	grid: {
		marginBottom: "2rem"
	},
  card: {
		height: '8rem',
		padding: '1rem',
		textAlign: 'center',
		backgroundColor: 'white'
	}
});

const Recipient = (props) => {
	const { action } = props;
	const classes = useStyles();

	return (
		<Grid container spacing={2} className={classes.grid}>
			<Grid item xs={3}>
				<TapCard
					message="Chris"
					action={() => action("Chris")}
				/>
			</Grid>
		</Grid>
	);
}

export default Recipient;
