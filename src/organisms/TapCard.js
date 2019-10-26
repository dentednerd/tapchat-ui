import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Emoji from 'a11y-react-emoji'

const useStyles = makeStyles({
  card: {
		height: '8rem',
		padding: '1rem',
		textAlign: 'center',
		backgroundColor: 'white'
	},
	active: {
		textAlign: 'center',
		backgroundColor: "powderblue"
	},
	clickable: {
		height: "8rem",
		textAlign: "center"
	},
	emoji: {
		fontSize: '4rem',
		height: '4rem',
		margin: 0,
		padding: 0
	},
	message: {
		fontFamily: "OpenDyslexic",
		fontSize: "1rem",
		height: "1rem",
		margin: 0,
		padding: 0
	}
});

const TapCard = (props) => {
	const [active, isActive] = useState(false);
	const { icon, message, action } = props;
	const classes = useStyles();

	const whenClicked = () => {
		isActive(!active);
		return action();
	}

	return (
		<Card
			raised={!active}
			className={classes.card, active && classes.active}
		>
			<CardActionArea
				onClick={whenClicked}
				className={classes.clickable}
      >
				<Emoji className={classes.emoji} symbol={icon} label={message} />
				<p className={classes.message}>{message}</p>
			</CardActionArea>
		</Card>
	)
};

export default TapCard;
