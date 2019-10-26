import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  card: {
		width: '20rem',
		height: '20rem',
		margin: '1rem',
		padding: '1rem',
		textAlign: 'center'
	}
});

const TapCard = (props) => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			{props.word}
		</Card>
	)
};

export default TapCard;
